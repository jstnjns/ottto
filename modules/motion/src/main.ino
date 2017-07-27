#include <functional>
#include "Arduino.h"
#include "IPAddress.h"
#include "ESP8266WiFi.h"
#include "PubSubClient.h"
#include "WiFiManager.h"
#include "ArduinoJson.h"


const int motionPin = D0;
bool motionState = LOW;

IPAddress serverAddress(192,168,1,200);
const int mqttPort = 1883;
const int httpPort = 1337;

char moduleName[] = "motionsensor";
char topic[] = "modules/9";

// Ottto ottto(moduleName, serverAddress, mqttPort);
WiFiManager wifiManager;
WiFiClient espClient;
PubSubClient client(espClient);


void setup() {
  pinMode(motionPin, INPUT);

  Serial.begin(115200);

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

// bool processJson(char* message) {
//   StaticJsonBuffer<200> jsonBuffer;
//   JsonObject& json = jsonBuffer.parseObject(message);
//
//   if (!json.success()) {
//     Serial.println("parseObject() failed");
//   }
//
//   // Do something with the new data
// }


void loop() {
  if (!client.connected()) {
    connect();
  }

  client.loop();

  bool motionValue = digitalRead(motionPin);
  bool highToLow = motionValue == HIGH && motionState == LOW;
  bool lowToHigh = motionValue == LOW && motionState == HIGH;

  if (highToLow || lowToHigh) {
    motionState = motionValue;
    publish();
  }
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
  bool motion = digitalRead(motionPin);
  values["motion"] = motion;

  // Build message Buffer
  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  Serial.print("Sending: ");
  Serial.println(buffer);
  client.publish(topic, buffer);
}
