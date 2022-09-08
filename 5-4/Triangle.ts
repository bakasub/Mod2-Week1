import {Shape} from "./Shape";

export class Triangle extends Shape{
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
}