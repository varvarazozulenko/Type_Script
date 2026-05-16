import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../Unit";

export class Frost extends UnitDecorator {
  private slowdown: number;

  constructor(unit: Unit, slowdown: number = 20) {
    super(unit);
    this.slowdown = slowdown;
  }

  public getDescription(): string {
    return `Морозный ${this.unit.getDescription()}, базовый урон ${this.unit.getDamage()} с эффектом замедления ${this.slowdown}%`;
  }

  public getDamage(): number {
    return this.unit.getDamage();
  }
}
