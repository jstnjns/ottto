/*
  Ottto.cpp - An IoT library
  Justin Jones
  http://getottto.com/
*/

#include "Ottto.h"


WiFiManager wifiManager;
WiFiClient espClient;
PubSubClient client(espClient);


Ottto::Ottto(otttoConfig config) {
  this->_config = config;
  this->_client = client;
}


void Ottto::begin() {
  wifiManager.autoConnect(this->_config.name);
  this->_client.setServer(this->_config.host, 1883);
}


void Ottto::subscribe(MQTT_CALLBACK_SIGNATURE) {
  this->_client.setCallback(callback);
}


void Ottto::publish(char* payload) {
  Serial.print("Sending: ");
  Serial.print(this->_config.topic);
  Serial.print(": ");
  Serial.println(payload);

  this->_client.publish(this->_config.topic, payload, true);
}


void Ottto::loop() {
  if (!this->_client.connected()) {
    while (!this->_client.connected()) {
      Serial.print("Attempting MQTT connection...");
       if (this->_client.connect(this->_config.name)) {
          Serial.print("connected...");
          Serial.println(this->_config.topic);
          this->_client.subscribe(this->_config.topic);
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
