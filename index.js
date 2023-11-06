// import packages
const inq = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// Create question array for prompt
const questions = [
    // Ask what text on the logo
    {
        type: "input",
        message: "Please enter the text you would like the logo to have? (three character limit)",
        name: "text",
    },
    // Ask what color text on the logo
    {
        type: "input",
        message: "Please choose a text color. You may enter a color keyword, or use a hex code string",
        name: "textColor",
    },
    // Ask which shape to use for the logo
    {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Triangle", "Circle", "Square"],
        name: "shape",
    },
    // Ask what color the shape should be
    {
        type: "input",
        message: "Please choose a color for the shape. You may enter a color keyword, or use a hex code string",
        name: "shapeColor",
    },
];

// function to prompt the user in the console
function doItToIt() {
    inq
        .prompt(questions)
        .then((data) => {
            console.log(data)
          scribbleDown(data);
        })
    }

// function to write a file and save it
function scribbleDown(data) {
    let shapeString = '<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><g>';// the g tag allows grouping of SVG elements. This is used to overlay the text on the shape
    let end = '</svg>'; // to close the svg element
    let shapeChoice = `${data.shape}`
    let shapeOutput;
    let userText = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text></g>`; // sets text location and size and color and closes the group tag
   
    
    if (shapeChoice === 'Triangle') {
        shapeOutput = new Triangle();
        shapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`; // sets triangle size and color
    } else if (shapeChoice === 'Circle') {
        shapeOutput = new Circle();
        shapeString += `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`; // sets circle size and color
    } else{
        shapeOutput = new Square();
        shapeString += `<rect x="70" y="40" width="150" height="150" fill="${data.shapeColor}"/>` //sets square(rectangle) size and color
    }    

    // combine all strings to make 1 SVG element
        svgString = shapeString+ userText + end
           // Create an svg file with the users shape, text, and color choices
    fs.writeFile("logo.svg", svgString, (err) => {
        // if writeFile errors err is logged, otherwise Generated logo.SVG is logged
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}
function init() {
    doItToIt();
}

init()