#include "Ottto.h"

const int contactPin = 16;
bool contactState = HIGH;

otttoConfig config = {
  .name = "Door Sensor",
  .type = "ottto.switch.door"
};
Ottto ottto(config);


void setup() {
  pinMode(contactPin, INPUT);

  ottto.begin();
}


void loop() {
  ottto.loop();

  bool contactValue = digitalRead(contactPin);
  bool highToLow = contactValue == HIGH && contactState == LOW;
  bool lowToHigh = contactValue == LOW && contactState == HIGH;

  if (highToLow || lowToHigh) {
    contactState = contactValue;
    ottto.publish(payload());
  }

  yield();
}


char* payload() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& values = json.createNestedObject("values");

  bool contact = digitalRead(contactPin);
  values["contact"] = contact;

  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  return buffer;
}
