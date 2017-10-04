#include "Ottto.h"


otttoConfig config = {
  .name = "lightstrip",
  .topic = "modules/17",
  .host = "10.10.0.1"
};
Ottto ottto(config);


void setup() {
  Serial.begin(115200);

  ottto.begin();
  // ottto.subscribe(receive);


  // pinMode(2, OUTPUT); // Built In LED
  pinMode(14, OUTPUT); // RED
  pinMode(5, OUTPUT); // GREEN
  pinMode(12, OUTPUT); // BLUE
  // pinMode(13, OUTPUT); // WHITE

  // analogWrite(2, 255); // Build in LED
  analogWrite(14, 255); // RED
  analogWrite(5, 255); // GREEN
  analogWrite(12, 255); // BLUE
  // analogWrite(13, 255); // WHITE
}


void loop() {
  ottto.loop();
}
