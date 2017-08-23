#include "Ottto.h"


otttoConfig config = {
  .name = "motionsensor",
  .topic = "modules/9",
  .host = "10.10.0.1"
};
Ottto ottto(config);

const int motionPin = D0;
bool motionState = LOW;


void setup() {
  Serial.begin(115200);

  pinMode(motionPin, INPUT);

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
