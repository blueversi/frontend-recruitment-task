class Counter {
  constructor(counterName, initValue) {
    this.counterName = counterName;
    this.initValue = initValue;
    this.counter = initValue;
    this.init();
  }

  init() {
    let value = parseInt(localStorage.getItem(this.counterName));
    this.counter = value || this.initValue;
  }

  getValue() {
    return this.counter;
  }

  increase(number) {
    this.counter = parseInt(this.counter) + number;
    localStorage.setItem(this.counterName, this.counter);
  }

  reset() {
    this.counter = parseInt(this.initValue);
    localStorage.setItem(this.counterName, this.counter);
  }
}
