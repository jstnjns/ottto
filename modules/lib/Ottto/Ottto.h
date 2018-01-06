/*
  Ottto.h - An IoT library
  Justin Jones
  http://getottto.com/
*/

#ifndef Ottto_h
#define Ottto_h

#include "functional"
#include "Arduino.h"
#include "ESP8266WiFi.h"
#include "PubSubClient.h"
#include "WiFiManager.h"
#include "ArduinoJson.h"


struct otttoConfig {
  const char* name;
  const char* type;
};
typedef struct otttoConfig otttoConfig;


class Ottto {
  public:
    Ottto(otttoConfig config);

    void begin();
    void loop();

    void subscribe(MQTT_CALLBACK_SIGNATURE);
    void publish(char*);

  private:
    otttoConfig _config;
    PubSubClient _client;

    const char* _host;
    const char* _topic;

    const char* getTopic();
};

#endif
