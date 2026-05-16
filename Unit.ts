export abstract class Unit {
    protected description: string = "Неизвестный юнит";
    protected baseDamage: number = 0;

    public abstract getDescription(): string;
    public abstract getDamage(): number;
}