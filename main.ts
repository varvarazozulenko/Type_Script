import { Warrior } from "./ConcreteUnits/Warrior";
import { Wizard } from "./ConcreteUnits/Wizard";
import { Archer } from "./ConcreteUnits/Archer";
import { Fire } from "./Decorators/Fire";
import { Frost } from "./Decorators/Frost";
import { Poison } from "./Decorators/Poison";
import { Unit } from "./Unit";

function generateRandomUnit(): Unit {
  const unitTypes = [Warrior, Wizard, Archer];
  const decorators = [Fire, Frost, Poison];

  const RandomUnitClass =
    unitTypes[Math.floor(Math.random() * unitTypes.length)];
  let unit: Unit = new RandomUnitClass();

  const RandomDecoratorClass =
    decorators[Math.floor(Math.random() * decorators.length)];

  if (RandomDecoratorClass === Fire) {
    unit = new Fire(unit, Math.floor(Math.random() * 10) + 5);
  } else if (RandomDecoratorClass === Frost) {
    unit = new Frost(unit, Math.floor(Math.random() * 30) + 10);
  } else if (RandomDecoratorClass === Poison) {
    unit = new Poison(unit, Math.floor(Math.random() * 5) + 3);
  }

  return unit;
}

console.log("5 рандомных юнитов:");
for (let i = 0; i < 5; i++) {
  const randomUnit = generateRandomUnit();
  console.log(randomUnit.getDescription());
}
