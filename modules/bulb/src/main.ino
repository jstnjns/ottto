#include "Ottto.h"

#include "my9291.h"
#include "RGBConverter.h"

#define MY9291_DI_PIN 13
#define MY9291_DCKI_PIN 15

otttoConfig config = {
  .name = "lightbulb",
  .topic = "modules/17",
  .host = "10.10.0.1"
};
Ottto ottto(config);

my9291 lights = my9291(MY9291_DI_PIN, MY9291_DCKI_PIN, MY9291_COMMAND_DEFAULT);
RGBConverter colorConverter;


void setup() {
  Serial.begin(115200);

  setColor("#ffffff");
  setPower(true);

  ottto.begin();
  ottto.subscribe(receive);


  setPower(false);
  delay(200);
  setPower(true);
  delay(200);
  setPower(false);
  delay(200);
  setPower(true);
}


void receive(char* topic, uint8_t* payload, unsigned int length) {
  char message[length + 1];
  for (int i = 0; i < length; i++) {
    message[i] = (char)payload[i];
  }
  message[length] = '\0';

  Serial.print("Received: ");
  Serial.print(topic);
  Serial.print(": ");
  Serial.println(message);

  process(message);
}


void process(char* message) {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& body = jsonBuffer.parseObject(message);

  const char* colorValue = body["values"]["color"];
  if (colorValue) {
    setColor(colorValue);
  }

  bool powerValue = body["values"]["power"];
  setPower(powerValue);
}


void setColor(String colorValue) {
  unsigned int number = strtol(&colorValue[1], NULL, 16);
  unsigned int r = number >> 16;
  unsigned int g = number >> 8 & 0xFF;
  unsigned int b = number & 0xFF;

  lights.setColor((my9291_color_t) { r, g, b, 0 });
}


void setPower(bool powerValue) {
  lights.setState(powerValue);
}


void loop() {
  ottto.loop();
}


char* payload() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& values = json.createNestedObject("values");
  values["power"] = getPower();
  values["color"] = getColor();

  // Build message Buffer
  char buffer[json.measureLength() + 1];
  json.printTo(buffer, sizeof(buffer));

  return buffer;
}


bool getPower() {
  return lights.getState();
}


String getColor() {
  my9291_color_t rgb = lights.getColor();
  unsigned int hex =
    ((rgb.red   & 0xff) << 16) +
    ((rgb.green & 0xff) << 8) +
     (rgb.blue  & 0xff);

  // double hsv[3];
  // colorConverter.rgbToHsv(rgb.red, rgb.green, rgb.blue, hsv);

  String colorValue = String(hex, HEX);
  return colorValue;
}
