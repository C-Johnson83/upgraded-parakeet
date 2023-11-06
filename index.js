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
    let shapeString = '<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    let end = '</svg>';
    let shapeChoice = `${data.shape}`
    let shapeOutput;
    let userText = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
    console.log(userText)
    
    if (shapeChoice === 'Triangle') {
        shapeOutput = new Triangle();
        shapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
    } else if (shapeChoice === 'Circle') {
        shapeOutput = new Circle();
        shapeString += `<circle cx="25" cy="75" r="20" fill="${data.shapeColor}"/>`;
    } else{
        shapeOutput = new Square();
        shapeString += `<rect x="10" y="10" width="30" height="30" fill="${data.shapeColor}"/>`
    }    


        svgString = shapeString+ userText + end
           // Create an svg file with the users shape, text, and color choices
    fs.writeFile("logo.svg", svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}
    doItToIt();
    