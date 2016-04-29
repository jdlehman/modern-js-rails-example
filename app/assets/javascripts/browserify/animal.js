export default class Animal {
  constructor({name}) {
    this.name = name;
  }

  sayHello() {
    return `Hi my name is ${this.name}.`;
  }
}
