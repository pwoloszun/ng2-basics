interface Loggable {
  log(msg: string);

  error(msg: string);
}

class ConsoleLogger implements Loggable {
  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }

}

class Person {
  getName(): string {
    return 'bob';
  }

  log(msg: string) {
    console.log(this.getName(), msg);
  }
}

// TODO introduce type LoggablePerson

function createLoggablePerson(): Person & ConsoleLogger {
  let result = <Person & ConsoleLogger>new Person();
  let logger: ConsoleLogger = new ConsoleLogger();
  for (let propName in logger) {
    result[propName] = logger[propName];
  }
  return result;
}

function testUnion() {
  let bob: Person & ConsoleLogger = createLoggablePerson();
  bob.getName();
  bob.error('bob error');
}

export function unionsApp() {
  testUnion();
}
