// import packages
const inq = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const { availableParallelism } = require('os');


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
        message: "Please choose a color for the shape. You may enter a color keyword, a hex code string, or type gradient",
        name: "shapeColor",
    },
      // Ask the type of gradient if condition is met
  {
    type: "list",
    message: "Please choose the type of gradient for your shape",
    name: "gradientType",
    choices: ["Linear", "Radial"],
    when: (answers) => answers.shapeColor === 'gradient',
},
  // Ask the first color of the shape gradient if condition is met
  {
    type: "input",
    message: "Please choose the first color for the shape gradient. You may enter a color keyword or use a hex code string",
    name: "gradientColor1",
    when: (answers) => answers.shapeColor === 'gradient',
},
// Ask the second color of the shape gradient if condition is met
{
    type: "input",
    message: "Please choose the second color for the shape gradient. You may enter a color keyword or use a hex code string",
    name: "gradientColor2",
    when: (answers) => answers.shapeColor === 'gradient',
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
    let userText = `<text x="150" y="175" text-anchor="middle" font-size="60" fill="${data.textColor}" stroke="black">${data.text}</text></g>`; // sets text location and size and color and closes the group tag
    let gradientParams = `<defs> <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="${data.gradientColor1}" /><stop offset="50%" stop-color="black" stop-opacity="0" /><stop offset="100%" stop-color="${data.gradientColor2}"/></linearGradient><radialGradient id="Gradient2" cx="0.5" cy="0.5" r="0.375" fx="0.75" fy="0.75" spreadMethod="repeat"><stop offset="0%" stop-color="${data.gradientColor1}" /><stop offset="100%" stop-color="${data.gradientColor2}" /></radialGradient></defs>`
    let gradient1 = 'url(#Gradient)'
    let gradient2 = 'url(#Gradient2)'
    
if (data.shapeColor === 'gradient' && data.gradientType === 'Linear') {
    data.shapeColor = gradient1
    shapeString += gradientParams;
} else if (data.shapeColor === 'gradient' && data.gradientType === 'Radial') {
    data.shapeColor = gradient2
    shapeString += gradientParams;
}

    if (shapeChoice === 'Triangle') {
        shapeOutput = new Triangle();
        shapeString += `<polygon points="150, 50 275, 250 25, 250" fill="${data.shapeColor}"/>`; // sets triangle size and color
    } else if (shapeChoice === 'Circle') {
        shapeOutput = new Circle();
        shapeString += `<circle cx="150" cy="150" r="125" fill="${data.shapeColor}"/>`; // sets circle size and color
    } else{
        shapeOutput = new Square();
        shapeString += `<rect x="25" rx="15" ry="15" y="25" width="250" height="250" fill="${data.shapeColor}"/>` //sets square(rectangle) size and color
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