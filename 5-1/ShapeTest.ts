import {Shape} from "./Shape";

export class Circle extends Shape{
    private _radius: number = 1.0


    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    Area(): number{
        return this.radius * this.radius * Math.PI
    }

    Perimeter(): number{
        return  2 * this.radius * Math.PI
    }

    toString(): string {
        return `A Circle with radius of ${this.radius}, with a subclass of ${super.toString()}`
    }
}