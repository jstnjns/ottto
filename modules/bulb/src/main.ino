#include "Ottto.h"
#include "my9291.h"
#include "RGBConverter.h"

#define MY9291_DI_PIN 13
#define MY9291_DCKI_PIN 15

otttoConfig config = {
  .name = "Light Bulb",
  .type = "ottto.light.bulb"
};
Ottto ottto(config);

my9291 lights = my9291(MY9291_DI_PIN, MY9291_DCKI_PIN, MY9291_COMMAND_DEFAULT);
RGBConverter colorConverter;
String color = "#FFFFFF";
uint16_t level = 255;
bool power = true;

const static uint8_t PROGMEM gamma8[256] = {
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,
    1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   2,   2,   2,   2,
    2,   2,   2,   2,   3,   3,   3,   3,   3,   3,   3,   4,   4,   4,   4,
    4,   5,   5,   5,   5,   6,   6,   6,   6,   7,   7,   7,   7,   8,   8,
    8,   9,   9,   9,   10,  10,  10,  11,  11,  11,  12,  12,  13,  13,  13,
    14,  14,  15,  15,  16,  16,  17,  17,  18,  18,  19,  19,  20,  20,  21,
    21,  22,  22,  23,  24,  24,  25,  25,  26,  27,  27,  28,  29,  29,  30,
    31,  32,  32,  33,  34,  35,  35,  36,  37,  38,  39,  39,  40,  41,  42,
    43,  44,  45,  46,  47,  48,  49,  50,  50,  51,  52,  54,  55,  56,  57,
    58,  59,  60,  61,  62,  63,  64,  66,  67,  68,  69,  70,  72,  73,  74,
    75,  77,  78,  79,  81,  82,  83,  85,  86,  87,  89,  90,  92,  93,  95,
    96,  98,  99,  101, 102, 104, 105, 107, 109, 110, 112, 114, 115, 117, 119,
    120, 122, 124, 126, 127, 129, 131, 133, 135, 137, 138, 140, 142, 144, 146,
    148, 150, 152, 154, 156, 158, 160, 162, 164, 167, 169, 171, 173, 175, 177,
    180, 182, 184, 186, 189, 191, 193, 196, 198, 200, 203, 205, 208, 210, 213,
    215, 218, 220, 223, 225, 228, 231, 233, 236, 239, 241, 244, 247, 249, 252,
    255};


void setup() {
  Serial.begin(115200);

  setColor(color);
  setPower(power);
  updateLight();

  ottto.begin();
  ottto.subscribe(receive);

  setColor("#00FFFF");
  updateLight();
  delay(200);
  setColor("#FFFFFF");
  updateLight();
  delay(200);
  setColor("#00FFFF");
  updateLight();
  delay(200);
  setColor("#FFFFFF");
  updateLight();
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
  JsonObject& values = body["values"];

  if (values.containsKey("power")) {
    bool powerValue = values["power"];
    setPower(powerValue);
  }

  if (values.containsKey("level")) {
    uint16_t levelValue = values["level"];
    setLevel(levelValue);
  }

  if (values.containsKey("color")) {
    const char* colorValue = values["color"];
    setColor(colorValue);
  }

  updateLight();
}


void setLevel(uint16_t levelValue) {
  level = map(levelValue, 0, 100, 0, 255);
}


void setColor(String colorValue) {
  color = colorValue;
}


void setPower(bool powerValue) {
  power = powerValue;
}


void updateLight() {
  unsigned int number = strtol(&color[1], NULL, 16);
  unsigned int r = number >> 16;
  unsigned int g = number >> 8 & 0xFF;
  unsigned int b = number & 0xFF;

  // gamma correction
  uint8_t gr = pgm_read_byte(&gamma8[r]);
  uint8_t gg = pgm_read_byte(&gamma8[g]);
  uint8_t gb = pgm_read_byte(&gamma8[b]);

  // level adjusted
  uint32_t red = map(gr, 0, 255, 0, level);
  uint32_t green = map(gg, 0, 255, 0, level);
  uint32_t blue = map(gb, 0, 255, 0, level);

  lights.setColor((my9291_color_t) { red, green, blue, 0 });
  lights.setState(power);
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
