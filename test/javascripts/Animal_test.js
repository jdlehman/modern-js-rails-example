import expect from 'expect';
import Animal from 'animal';

describe('Animal', () => {
  let animal;
  beforeEach(() => {
    animal = new Animal({name: 'Joe'});
  });

  it('should set its name', () => {
    expect(animal.name).toEqual('Joe');
  });

  it('#sayHello should return a string', () => {
    expect(animal.sayHello()).toEqual('Hi my name is Joe.');
  });
});
