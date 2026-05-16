import { Unit } from "../Unit";


export class Archer extends Unit {
    constructor() {
        super();
        this.description = "Лучник";
        this.baseDamage = 12;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDamage(): number {
        return this.baseDamage;
    }
}