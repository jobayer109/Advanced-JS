import Parent from "./Parent";

class Child extends Parent {
  constructor(color, height, width) {
    super(color);
    this.height = height;
    this.width = width;
  }

  calculate() {
    return this.height * this.width;
  }
}

export default Child;
