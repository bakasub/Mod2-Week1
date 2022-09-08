export class Circle {
    private _radius: number;
    private _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    Area(): number {
        return this.radius * this.radius * Math.PI
    }

    Perimeter(): number {
        return 2 * this.radius * Math.PI
    }

}