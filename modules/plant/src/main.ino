#include <functional>
#include "Arduino.h"
#include "IPAddress.h"
#include "ESP8266WiFi.h"
#include "PubSubClient.h"
#include "WiFiManager.h"
#include "ArduinoJson.h"

#include "DHT.h">

#define DHTTYPE DHT22
#define DHTPIN D4

const int lightPin = 0;
const int soilPin = D3;

IPAddress serverAddress(192,168,1,200);
const int mqttPort = 1883;
const int httpPort = 1337;

char moduleName[] = "plant";
char topic[] = "modules/22";

WiFiManager wifiManager;
WiFiClient espClient;
PubSubClient client(espClient);

DHT dht(DHTPIN, DHTTYPE);


void setup() {
  Serial.begin(115200);
  dht.begin();

  wifiManager.autoConnect(moduleName);
  client.setServer(serverAddress, mqttPort);
  client.setCallback(receive);
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

  // processJson(message);
}


void loop() {
  if (!client.connected()) {
    connect();
  }

  client.loop();

  publish();

  delay(1000);
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
  int temperature = dht.readTemperature(true);
  int humidity = dht.readHumidity();
  int soil = getSoilMoisture();
  int light = getLight();
  values["temperature"] = temperature;
  values["humidity"] = humidity;
  values["soil"] = soil;
  values["light"] = light;

  // Build message Buffer
  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  if(!isnan(temperature) && !isnan(humidity)) {
    Serial.print("Sending: ");
    Serial.println(buffer);
    client.publish(topic, buffer);
  }
}

int getSoilMoisture() {
  // int moisture = map(digitalRead(moisturePin), 300, 1024, 4, 0);
  int moisture = digitalRead(soilPin);
  return moisture;
}

int getLight() {
  int light = map(analogRead(lightPin), 0, 1024, 0, 4);
  return light;
}
