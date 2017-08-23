#include "Ottto.h"
#include "DHT.h"
#include "AnalogMultiplexer.h"


otttoConfig config = {
  .name = "plant",
  .topic = "modules/22",
  .host = "10.10.0.1"
};
Ottto ottto(config);


#define DHTTYPE DHT22
#define DHTPIN D4

DHT dht(DHTPIN, DHTTYPE);
AnalogMux amux(D0,D1,D2, 0);


void setup() {
  Serial.begin(115200);

  dht.begin();

  ottto.begin();
  ottto.subscribe(receive);
}


void receive(char* topic, uint8_t* payload, unsigned int length) {
  char message[length + 1];
  for (int i = 0; i < length; i++) {
    message[i] = (char)payload[i];
  }
  message[length] = '\0';

  Serial.print("Received: ");
  Serial.print(config.topic);
  Serial.print(": ");
  Serial.println(message);
}


void loop() {
  ottto.loop();

  ottto.publish(payload());

  delay(5000);
}


char* payload() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& values = json.createNestedObject("values");

  int temperature = dht.readTemperature(true);
  int humidity = dht.readHumidity();
  int soil = getSoilMoisture();
  int light = getLight();
  values["temperature"] = temperature;
  values["humidity"] = humidity;
  values["light"] = light;
  values["soil"] = soil;

  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  return buffer;
}


int getLight() {
  amux.SelectPin(0);
  int light = map(amux.AnalogRead(), 0, 1024, 0, 4);
  return light;
}


int getSoilMoisture() {
  amux.SelectPin(1);
  int moisture = map(amux.AnalogRead(), 300, 1024, 4, 0);
  return moisture;
}
