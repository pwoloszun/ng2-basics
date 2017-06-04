interface EventDictionary {
  [name: string]: Function;
}

interface EventEmitterOptions {
  on: EventDictionary;
}

function MyEventEmitter(props: EventEmitterOptions) {
  // TODO
}

function trigger(eventName: string) {
  // TODO
}

export {
  MyEventEmitter,
  trigger,
}
