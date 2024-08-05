const Triangle = require('./Triangle')

describe('Triangle', () => {
    it('should create a triangle at 300 px in and 200 px down with user entry of shape, initials, and chosen text color', () =>{
        const triangle = new Triangle('purple', 'LBG', 'yellow'); //notice how the variable name is not the same as the "class" 
        expect(triangle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 190,190 20,190" fill="purple"/>
  <text x="40" y="188" fill="yellow" font-size="65">LBG</text>
</svg>`)
    })
})