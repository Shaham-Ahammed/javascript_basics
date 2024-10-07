class Name {
  constructor(age) {
    this._age=age;
  }
  get getAge() {
    return this._age;
  }
  set setAge(x) {
    this._age = x;
  }
}

const obje = new Name(33);

console.log(obje.getAge);

obje.setAge = 44;

console.log(obje.getAge);
