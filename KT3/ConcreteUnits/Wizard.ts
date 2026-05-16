import { Unit } from "../Unit";

export class Wizard extends Unit {
  constructor() {
    super();
    this.description = "Маг";
    this.baseDamage = 10;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDamage(): number {
    return this.baseDamage;
  }
}
