import { MyEventEmitter, trigger } from './02-my-event-emitter';

// @MyEventEmitter({
//   on: {
//     'name:change': function (...args: any[]) {
//       console.log('name:change', this, args);
//     },
//     'xxx': function (...args: any[]) {
//       console.log('xxx', this, args);
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

  // @trigger('xxx')
  ggg(f: number) {
    console.log('ggg');
  }
}

export function eventEmitterDecoratorApp() {
  let bob: Person = new Person('bob');
  let ed: Person = new Person('ed');

  bob.ggg(123);
  ed.ggg(997);

  console.log('Decorated Bob:', bob);
  bob.setName('Ed II');
  console.log('bob name:', bob.getName());
}
