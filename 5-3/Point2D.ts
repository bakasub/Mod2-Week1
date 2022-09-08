export class Point2D{
    private _pointX: number;
    private _pointY: number;

    constructor(pointX: number, pointY: number) {
        this._pointX = pointX;
        this._pointY = pointY;
    }

    get pointX(): number {
        return this._pointX;
    }

    set pointX(value: number) {
        this._pointX = value;
    }

    get pointY(): number {
        return this._pointY;
    }

    set pointY(value: number) {
        this._pointY = value;
    }
    getXY(){
        
    }
}