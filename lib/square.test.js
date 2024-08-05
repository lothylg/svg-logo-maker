const Square = require('./Square.js');

describe('Square', () => {
    it('should create a square at 300 px in and 200 px down with user entry of shape, initials, and chosen text color', () =>{
        const square = new Square('yellow', 'LBG', 'red');
        expect(square.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="30" fill="yellow" width="150" height="150"/>
  <text x="50" y="125" fill="red" font-size="65">LBG</text>
</svg>`)
    })
})