class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectang = new Rectangle(7,9);
console.log("Area:", rectang.area());
console.log("Perimeter:", rectang.perimeter());
