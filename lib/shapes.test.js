// From Bootcamp for test
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Import the shapes from the shapes.js file
const {Triangle, Circle, Square} = require('./shapes.js');

// The following example tests the triangle
describe("▲",  () =>{
    test("red triangle", () =>{
const shape = new Triangle();
shape.setColor("red");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    })
})