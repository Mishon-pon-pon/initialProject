import { action, makeObservable, observable } from "mobx";

export interface ICounter {
  count: number;
}
export interface ICounterViewModel {
  getCounter: () => ICounter;
  setCounter: (data: ICounter) => void;
  increment: () => void;
  decrement: () => void;
  clear: () => void;
}

export class CounterViewModel implements ICounterViewModel {
  private counter: ICounter = { count: 0 };

  constructor() {
    this.getCounter = this.getCounter.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.clear = this.clear.bind(this);

    makeObservable<this, "counter">(this, {
      counter: observable,
      setCounter: action,
    });
  }

  getCounter() {
    return this.counter;
  }
  setCounter(data: ICounter): void {
    this.counter = data;
  }

  increment() {
    this.setCounter({ count: this.counter.count + 1 });
  }
  decrement(): void {
    this.setCounter({ count: this.counter.count - 1 });
  }
  clear() {
    this.setCounter({ count: 0 });
  }
}
