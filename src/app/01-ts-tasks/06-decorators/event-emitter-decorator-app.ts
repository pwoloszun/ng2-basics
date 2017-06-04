import { MyEventEmitter, trigger } from './02-my-event-emitter';

// @MyEventEmitter({
//   on: {
//     'name:change': function (oldValue: string, currentValue: string) {
//       console.log('current context', this);
//       console.log('values', oldValue, currentValue);
//     }
//   }
// })
class Person {
  constructor(public name: string) {
  }

  getName() {
    return this.name;
  }

  // @trigger('name:change')
  setName(value: string) {
    this.name = value;
  }
}

export function eventEmitterDecoratorApp() {
  let bob: Person = new Person('bob');

  console.log('Decorated Bob:', bob);
  bob.setName('Ed II');
  console.log('bob name:', bob.getName());
}
