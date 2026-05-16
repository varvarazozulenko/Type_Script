import { Unit } from "../Unit";

export class Warrior extends Unit {
    constructor() {
        super();
        this.description = "Воин";
        this.baseDamage = 15;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDamage(): number {
        return this.baseDamage;
    }
}