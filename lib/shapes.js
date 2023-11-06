// create parent class for Shape object
class Shape {
    constructor() {
        this.color = color
    }
}

// Create child class for Triangle 
class Triangle extends Shape {
    render() {}
}

// Create child class for Circle 
class Circle extends Shape {
    render() {}
}

// Create child class for Square 
class Square extends Shape {
    render() {}
}

// export the child shapes for testing and creating
module.exports = {Triangle, Circle, Square};