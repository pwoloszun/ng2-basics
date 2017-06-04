interface EventDictionary {
  [name: string]: Function;
}

interface EventEmitterOptions {
  on: EventDictionary;
}

function MyEventEmitter(props: EventEmitterOptions) {
  return function decorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      private eventListeners = {};

      constructor(...args: any[]) {
        super(...args);
        const {on = {}} = props;
        for (let name in on) {
          const listener = on[name];
          this.on(name, listener);
        }
      }

      private on(eventName: string, listener: Function) {
        if (!this.eventListeners[eventName]) {
          this.eventListeners[eventName] = [];
        }
        this.eventListeners[eventName].push(listener);
      }

      private trigger(eventName, ...args: any[]) {
        const listeners = this.eventListeners[eventName] || [];
        listeners.forEach((listener) => {
          listener.apply(this, args);
        });
      }
    };
  };
}

function trigger(eventName: string) {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propertyKey];
    const newDescriptor = {
      value: function (...args: any[]) {
        const oldValue = this.name;
        const result = originalFn.apply(this, args);
        const newValue = this.name;
        this.trigger('name:change', oldValue, newValue);
        return result;
      }
    };
    return newDescriptor;
  };
}

export {
  MyEventEmitter,
  trigger,
}
