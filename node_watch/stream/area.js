function calculateArea(radius) {
    return Math.PI * radius * radius;
}

function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function helloWorld() {
    console.log("Hello World");
}
module.exports = {
    calculateArea,
    calculatePerimeter,
    helloWorld
};