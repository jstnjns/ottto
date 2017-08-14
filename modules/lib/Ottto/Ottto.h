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
	const char* topic;
	const char* host;
};
typedef struct otttoConfig otttoConfig;


class Ottto {
  public:
    Ottto(otttoConfig config);

    void begin();

    void subscribe(MQTT_CALLBACK_SIGNATURE);
    void publish(char*);

    void loop();

  private:
    otttoConfig _config;
    PubSubClient _client;

    std::function<void(char*, uint8_t*, unsigned int)> _subscribeCallback;
    std::function<char*(void)> _publishCallback;
};

#endif
