// import packages
const inq = require('inquirer');
const fs = require('fs');


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
    test = toString(data)
    fs.writeFile("logo.svg", test, (err) => {
        err ? console.log(err) : console.log("done did it");
    });
}
    doItToIt();
    