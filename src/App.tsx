import React, { useEffect } from "react";
import { autorun, reaction } from "mobx";
import { observer } from "mobx-react";
import store from "./store";

const App: React.FC = observer(() => {
  const { countClass, countObject, doubleClass, animalClass } = store;

  autorun(() => {
    if (doubleClass.double === 10) {
      doubleClass.value = 0;
    }
  });

  reaction(
    () => animalClass.isHungry,
    (isHungry) => {
      if (isHungry) console.log("Now I'm hungry!");
      else console.log("I'm not hungry!");
      console.log("Energy level:", animalClass.energyLevel);
    }
  );

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      animalClass.reduceEnergy();
    }
  }, [animalClass]);

  return (
    <div>
      <div>
        <h1>Count Class </h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.decrease()}>-</button>
        <button onClick={() => countClass.increase()}>+</button>
      </div>
      <div>
        <h1>Count Object</h1>
        <div>number: {countObject.number}</div>
        <button onClick={() => countObject.decrease()}>-</button>
        <button onClick={() => countObject.increase()}>+</button>
      </div>
      <div>
        <h1>Computed</h1>
        <div>double: {doubleClass.value}</div>
        <button onClick={() => doubleClass.increment()}>+</button>
      </div>
    </div>
  );
});

export default App;
