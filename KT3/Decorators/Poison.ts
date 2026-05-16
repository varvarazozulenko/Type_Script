import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../Unit";

export class Poison extends UnitDecorator {
  private poisonDamage: number;

  constructor(unit: Unit, poisonDamage: number = 5) {
    super(unit);
    this.poisonDamage = poisonDamage;
  }

  public getDescription(): string {
    return `Ядовитый ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с периодическим уроном от яда ${this.poisonDamage}`;
  }

  public getDamage(): number {
    return this.unit.getDamage() + this.poisonDamage;
  }
}
