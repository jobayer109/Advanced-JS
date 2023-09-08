// Object literal
const rect = {
  width: 50,
  height: 100,
  draw: function () {
    `I am a Rectangle`;
    "Width: " + this.width;
    "Height: " + this.height;
  },
};
rect.draw();
rect.height = 120;
rect.draw();
