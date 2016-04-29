import Dog from './dog';
import uuid from 'node-uuid';

const dog = new Dog({name: 'Spot', sound: 'BARK! WOOF!'});

console.log(
  dog.sayHello('Dave')
);
console.log(
  dog.emitSound()
);
console.log(
  uuid.v4()
);
