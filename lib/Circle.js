
class Circle {
    constructor (shapeColor, initials, txtColor) {
        this.shapeColor = shapeColor
        this.initials = initials
        this.txtColor = txtColor
        // super (shapeColor, initials, txtColor);
    }
    render(){
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" fill="${this.shapeColor}" cy="75" r="75"></circle>
  <text x="23" y="98" fill="${this.txtColor}" font-size="65">${this.initials}</text>
</svg>`}
}

module.exports = Circle;