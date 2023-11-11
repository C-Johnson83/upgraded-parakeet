# upgraded-parakeet
Module 10 challenge repository

## Description
The upgraded-parakeet is a Node.js command-line application that allows users to generate custom SVG logos for their projects. Users can specify the text, text color, shape, and shape color to create unique logos without the need for a graphic designer.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Walkthrough Video](#walkthrough-video)

## User Story
AS a freelance web developer  
I WANT to generate a simple logo for my projects  
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I am prompted for text  
THEN I can enter up to three characters  
WHEN I am prompted for the text color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I am prompted for a shape  
THEN I am presented with a list of shapes to choose from: circle, triangle, and square  
WHEN I am prompted for the shape's color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I have entered input for all the prompts  
THEN an SVG file is created named `logo.svg`  
AND the output text "Generated logo.svg" is printed in the command line  
WHEN I open the `logo.svg` file in a browser  
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Mock Up
![mock up](examples/10-oop-homework-demo.png)

## Examples

![Generated Logo](examples/example1.svg)
![Generated Logo](examples/example2.svg)
![Generated Logo](examples/example3.svg)
![Generated Logo](examples/example4.svg)
![Generated Logo](examples/example5.svg)
![Generated Logo](examples/example6.svg)

## Installation
To install the upgraded-parakeet, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/upgraded-parakeet.git
2. Change to the project directory:
    ```bash  
    cd upgraded-parakeet  
3. Install the required dependencies using npm:  
    ```bash
    npm install   
    
## Usage
To use the upgraded-parakeet, run the following command in your terminal:  
   
    node index.js  
Follow the prompts to enter text, text color, shape, and shape color. The application will generate an SVG logo file named logo.svg.  

## Features
Accepts user input for text, text color, shape, and shape color.  
Supports custom text (up to three characters) and a wide range of colors.  
Provides a choice of shapes: circle, triangle, and square.  
Generates SVG logos that can be easily viewed in a web browser.  

## Tests
The application includes unit tests for the Triangle, Circle, and Square classes. You can run the tests using Jest. To run the tests, use the following command: 

    npm test

## Contributing
If you'd like to contribute to this project, please follow these guidelines:  
Fork the repository.
Create a new branch for your feature or fix: 

    
    git checkout -b feature-name
Make your changes and commit them:  


    git commit -m 'Add new feature'  

Push to your created branch:  

    git push origin feature-name.  
Create a pull request with a detailed description of your changes.  

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]  

## Walkthrough Video
You can watch a walkthrough video demonstrating how to use the application and showcasing it's functionality by clicking the link below. 

### Video example
https://watch.screencastify.com/v/PC7NdNRBSj1gmp3YUMk2





