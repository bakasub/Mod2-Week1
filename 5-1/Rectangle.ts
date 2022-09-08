import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private _width: number = 1.0;
    private _length: number = 1.0;


    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    calcAera(): number {
        return this.width * this.length
    }

    calcPerimeter(): number {
        return 2 * (this.width + this.length)
    }

    toString(): string {
        return `A Rectangle with width of ${this.width} and length of ${this.length}, which is a subclass of ` + super.toString()
    }
}