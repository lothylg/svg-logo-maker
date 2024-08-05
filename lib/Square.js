
class Square {
    constructor (shapeColor, initials, txtColor) {
                //here you're making them properties that you can use in any object that get crated in this class. any time you need that data, now it has access to it. 
        this.shapeColor = shapeColor
        this.initials = initials
        this.txtColor = txtColor
        // super (shapeColor, initials, txtColor); 
    }
    render(){
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="30" fill="${this.shapeColor}" width="150" height="150"/>
  <text x="50" y="125" fill="${this.txtColor}" font-size="65">${this.initials}</text>
</svg>`}
}

module.exports = Square;