// create parent class for Shape object
class Shape {
    constructor() {
        this.color = color
    }
}

// Create child class for Triangle 
class Triangle extends Shape {}

// Create child class for Circle 
class Circle extends Shape {}

// Create child class for Square 
class Square extends Shape {}

// export the child shapes for testing and creating
module.exports = {Triangle, Circle, Square};