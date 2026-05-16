import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../Unit";

export class Fire extends UnitDecorator {
  private fireDamage: number;

  constructor(unit: Unit, fireDamage: number = 10) {
    super(unit);
    this.fireDamage = fireDamage;
  }

  public getDescription(): string {
    return `Огненный ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с дополнительным уроном от огня ${this.fireDamage}`;
  }

  public getDamage(): number {
    return this.unit.getDamage() + this.fireDamage;
  }
}
