#include "Ottto.h"
#include "my9291.h"
#include "RGBConverter.h"

#define MY9291_DI_PIN 13
#define MY9291_DCKI_PIN 15

IPAddress serverAddress(192,168,1,200);
const int mqttPort = 1883;
const int httpPort = 1337;

char moduleName[] = "lightbulb";
char topic[] = "modules/16";

// Ottto ottto(moduleName, serverAddress, mqttPort);
my9291 lights = my9291(MY9291_DI_PIN, MY9291_DCKI_PIN, MY9291_COMMAND_DEFAULT);
RGBConverter colorConverter;
WiFiManager wifiManager;
WiFiClient espClient;
PubSubClient client(espClient);


void setup() {
  Serial.begin(115200);

  setupOTA();
  wifiManager.autoConnect(moduleName);
  client.setServer(serverAddress, mqttPort);
  client.setCallback(receive);

  setPower(false);
  delay(100);
  setPower(true);
  delay(100);
  setPower(true);
}


void setupOTA() {
  WiFi.mode(WIFI_STA);

  ArduinoOTA.onStart([]() {
    String type;
    Serial.println("Start updating...");
  });
  ArduinoOTA.onEnd([]() {
    Serial.println("\nEnd");
  });
  ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
    Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
  });
  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("Error[%u]: ", error);
    if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
    else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
    else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
    else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
    else if (error == OTA_END_ERROR) Serial.println("End Failed");
  });
  ArduinoOTA.begin();
}


void receive(char* topic, uint8_t* payload, unsigned int length) {
  Serial.print("Received: ");
  Serial.print(topic);
  Serial.print(": ");

  // Build message buffer
  char message[length + 1];
  for (int i = 0; i < length; i++) {
    message[i] = (char)payload[i];
  }
  message[length] = '\0';
  Serial.println(message);

  processJson(message);
}


void processJson(char* message) {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& body = jsonBuffer.parseObject(message);

  const char* colorValue = body["values"]["color"];
  if (colorValue) {
    setColor(colorValue);
  }

  bool powerValue = body["values"]["power"];
  setPower(powerValue);
}


void setColor(String colorValue) {
  unsigned int number = strtol(&colorValue[1], NULL, 16);
  unsigned int r = number >> 16;
  unsigned int g = number >> 8 & 0xFF;
  unsigned int b = number & 0xFF;

  lights.setColor((my9291_color_t) { r, g, b, 0 });
}


void setPower(bool powerValue) {
  lights.setState(powerValue);
}


void loop() {
  ArduinoOTA.handle();

  if (!client.connected()) {
    connect();
  }

  client.loop();
}


void connect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect(moduleName)) {
      Serial.println("connected");
      client.subscribe(topic);
      publish();
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}


void publish() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& values = json.createNestedObject("values");
  values["power"] = getPower();
  values["color"] = getColor();

  // Build message Buffer
  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  Serial.print("Sending: ");
  Serial.println(buffer);
  client.publish(topic, buffer);
}


bool getPower() {
  return lights.getState();
}


String getColor() {
  my9291_color_t rgb = lights.getColor();
  unsigned int hex =
    ((rgb.red   & 0xff) << 16) +
    ((rgb.green & 0xff) << 8) +
     (rgb.blue  & 0xff);

  // double hsv[3];
  // colorConverter.rgbToHsv(rgb.red, rgb.green, rgb.blue, hsv);

  String colorValue = String(hex, HEX);
  return colorValue;
}
