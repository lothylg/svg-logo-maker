const inquirer = require('inquirer');
const index = require('../index');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');
const Circle = require('./Circle.js');
const {writeFile} = require('fs/promises');
const {join} = require('path');
const {createLogo} = require('./createLogo.js');

function getOptions(){ //changed this over to a function because it wasn't really a class. 
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What shape would you like to use?",
                name: "shapeChoice",
                choices: ["circle", "triangle", "square"]
            },
            {
                type: "input",
                message: "What color would you like that shape?",
                name: "shapeColor"
            },
            {
                type:'input',
                message: 'What are your initials?',
                name: 'initials',
                validate: (answer) => { 
                    if (answer.length > 3) {
                        return console.log("Whoa, only 3 characters allowed!");
                        }
                        return true;
                    }
            },
            {
                type: "input",
                message: "What color would you like the text?",
                name: "txtColor",
            }
        ])
        .then( ({ shapeChoice, shapeColor, initials, txtColor }) => {
            let shape
            // if they want a circle:
            if( shapeChoice === 'circle' ){
                shape = new Circle(shapeColor, initials, txtColor)
            } else if ( shapeChoice === 'triangle') {
                shape = new Triangle(shapeColor, initials, txtColor)
            } else if ( shapeChoice === 'square' ){
                shape = new Square(shapeColor, initials, txtColor)
            }
            const svgData = shape.render();
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'),
                createLogo(svgData)
            )})

        .then(() => console.log("Generated logo.svg"))
        .catch((err) => {
            console.log(err);
            console.log('Houston, we have a problem');
        });
    }

module.exports = getOptions;
