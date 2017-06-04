interface MyParams {
  selector?: string;
  tmplUrl?: string;
}

function MyClassDecorator(props: MyParams) {
  return function decorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      public testProp = `qq ${Math.random()}`;
      public params = {...props};
    };
  };
}

function MyMethodDecorator(before: Function) {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalFn = target[propertyKey];
    const newDescriptor = {
      value: function (...args: any[]) {
        before.apply(this, args);
        return originalFn.apply(this, args);
      }
    };
    return newDescriptor;
  };
}

function logger(...args: any[]) {
  console.log('logger', args);
}

@MyClassDecorator({
  selector: 'my-app',
  tmplUrl: './xxx-yyy.html'
})
class Person {
  constructor(public name: string) {
  }

  @MyMethodDecorator(logger)
  getName() {
    return this.name;
  }
}

function testClassDecorator() {
  let bob = new Person('bob');
  // console.log('Decorated Bob:', bob);
  console.log('get name:', bob.getName());
}

export function decoratorExampleApp() {
  testClassDecorator();
}
