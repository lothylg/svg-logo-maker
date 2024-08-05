class Triangle {
    constructor (shapeColor, initials, txtColor) {
        //here you're making them properties that you can use in the render
        this.shapeColor = shapeColor
        this.initials = initials
        this.txtColor = txtColor
        // super (shapeColor, initials, txtColor); 
    }
    render(){
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 190,190 20,190" fill="${this.shapeColor}"/>
  <text x="40" y="188" fill="${this.txtColor}" font-size="65">${this.initials}</text>
</svg>`}
}

module.exports = Triangle;