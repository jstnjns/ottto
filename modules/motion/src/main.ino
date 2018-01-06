#include "Ottto.h"

const int motionPin = 16;
bool motionState = LOW;

otttoConfig config = {
  .name = "Motion Sensor",
  .type = "ottto.motion"
};
Ottto ottto(config);


void setup() {
  pinMode(motionPin, INPUT);

  ottto.begin();
}


void loop() {
  ottto.loop();

  bool motionValue = digitalRead(motionPin);
  bool highToLow = motionValue == HIGH && motionState == LOW;
  bool lowToHigh = motionValue == LOW && motionState == HIGH;

  if (highToLow || lowToHigh) {
    motionState = motionValue;
    ottto.publish(payload());
  }

  yield();
}


char* payload() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& values = json.createNestedObject("values");

  bool motion = digitalRead(motionPin);
  values["motion"] = motion;

  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  return buffer;
}
