import Dog from './dog';

const dog = new Dog({name: 'Spot', sound: 'BARK! WOOF!'});

console.log(
  dog.sayHello('Dave')
);
console.log(
  dog.emitSound()
);
