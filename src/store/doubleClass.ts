import { makeAutoObservable } from "mobx";

class Doubler {
  value;

  constructor(value: number) {
    makeAutoObservable(this);

    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

const doubleClass = new Doubler(0);

export default doubleClass;
