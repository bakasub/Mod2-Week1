var circle = /** @class */ (function () {
    function circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return circle;
}());
var circleList = [];
circleList.push(new circle("yellow", 10));
circleList.push(new circle("green", 15));
circleList.push(new circle("blue", 20));
function showCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
