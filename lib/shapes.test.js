// From Bootcamp for test
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Import the shapes from the shapes.js file
const {Triangle, Circle, Square} = require('./shapes.js');

// The following example tests the triangle
describe("▲",  () =>{
    test("red Triangle", () =>{
const shape = new Triangle();
shape.setColor("red");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red"/>');
    })
})
// The following example tests the Circle
describe("○",  () =>{
    test("green Circle", () =>{
const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
    })
})
// The following example tests the Square
describe("■",  () =>{
    test("blue Square", () =>{
const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
})