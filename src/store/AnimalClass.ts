import { makeAutoObservable } from "mobx";

class Animal {
  name;
  energyLevel;

  constructor(name: string) {
    this.name = name;
    this.energyLevel = 100;
    makeAutoObservable(this);
  }

  reduceEnergy() {
    this.energyLevel -= 10;
  }

  get isHungry() {
    return this.energyLevel < 50;
  }
}

const animalClass = new Animal("Gary");

export default animalClass;
