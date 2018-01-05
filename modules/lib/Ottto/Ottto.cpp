/*
  Ottto.cpp - An IoT library
  Justin Jones
  http://getottto.com/
*/

#include "Ottto.h"


WiFiManager wifiManager;
WiFiClient espClient;
PubSubClient client(espClient);

char topicBuffer[20];


Ottto::Ottto(otttoConfig config) {
  this->_client = client;
  this->_config = config;

  this->_host = "192.168.1.2";
  this->_topic = this->getTopic();

  // wifiManager.resetSettings(); // Uncomment to reset wifi settings
}


const char* Ottto::getTopic() {
  String topic = String("modules/") + String(ESP.getChipId());
  topic.toCharArray(topicBuffer, topic.length() + 1);

  return topicBuffer;
}


void Ottto::begin() {
  wifiManager.autoConnect(this->_config.name);
  this->_client.setServer(this->_host, 1883);
}


void Ottto::subscribe(MQTT_CALLBACK_SIGNATURE) {
  this->_client.setCallback(callback);
}


void Ottto::publish(char* payload) {
  Serial.print("Sending: ");
  Serial.print(this->_topic);
  Serial.print(": ");
  Serial.println(payload);

  this->_client.publish(this->_topic, payload, true);
}


void Ottto::loop() {
  if (!this->_client.connected()) {
    while (!this->_client.connected()) {
      Serial.print("Attempting MQTT connections...");

      if (this->_client.connect(this->_config.name)) {
        Serial.print("connected...");
        Serial.print("chip id: ");
        Serial.print(ESP.getChipId());
        Serial.print("...topic: ");
        Serial.println(this->_topic);

        this->_client.subscribe(this->_topic);

      } else {
        Serial.print("failed, rc=");
        Serial.print(this->_client.state());
        Serial.println(" try again in 5 seconds");
        delay(5000);
      }
    }
  }

  this->_client.loop();
}
