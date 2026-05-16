import { Unit } from "../Unit";

export abstract class UnitDecorator extends Unit {
  protected unit: Unit;

  constructor(unit: Unit) {
    super();
    this.unit = unit;
  }

  public abstract getDescription(): string;
  public abstract getDamage(): number;
}
