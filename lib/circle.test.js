const Circle = require('./Circle.js');

describe('Circle', () => {
    it('should create a circle at 300 px in and 200 px down with user entry of shape, initials, and chosen text color', () =>{
        const circle = new Circle('red', 'LBG', 'green');
        expect(circle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" fill="red" cy="75" r="75"></circle>
  <text x="23" y="98" fill="green" font-size="65">LBG</text>
</svg>`)
    })
})