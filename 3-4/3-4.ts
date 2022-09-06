class circle {
    color: string;
    radius: number;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}

let circleList: circle[] = [];

circleList.push(new circle("yellow", 10));

circleList.push(new circle("green", 15));

circleList.push(new circle("blue", 20));

function showCircle(circle: circle) {

    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);


}

circleList.forEach(showCircle);