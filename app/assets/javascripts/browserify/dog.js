import Animal from './animal';
import {doubleStr} from './helpers';

export default class Dog extends Animal {
  constructor({name, sound}) {
    super({name, sound});

    this.sound = sound;
  }

  sayHello(recipient) {
    return `${super.sayHello()} Hello to you, ${recipient}.`;
  }

  emitSound() {
    return doubleStr(this.sound);
  }
}
