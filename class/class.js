class Car {
  constructor(b, c) {
    this.b = b;
    this.c = c;
  }
  c1() {
    console.log(this.b, this.c);
  }
}

new Car(4, 5).c1();
