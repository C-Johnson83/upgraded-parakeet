// create parent class for Shape object
class Shape {
    constructor() {
        this.color = "";
    } setColor(userColor) {
        this.color = userColor;
    }
}

// Create child class for Triangle 
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
     }
}

// Create child class for Circle 
class Circle extends Shape {
    render() { 
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`

    }
}

// Create child class for Square 
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
     }
}

// export the child shapes for testing and creating
module.exports = { Triangle, Circle, Square };