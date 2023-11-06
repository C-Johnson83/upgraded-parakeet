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
        message: "Please choose a text color. You may enter a color keyword, or use a hexcode string",
        name: "textColor",
    },
    // Ask which shape to use for the logo
    {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Triangle", "Circle Square"],
        name: "shape",
    },
    // Ask what color the shape should be
    {
        type: "input",
        message: "Please hoose a color for the shape. You may enter a color keyword, or use a hexcode string",
        name: "shapeColor",
    },
];
