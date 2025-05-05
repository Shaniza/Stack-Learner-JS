class Rect{
    constructor(width, height){
        this.width = width
        this.height = height 
    }
    calculateArea(){
        return this.width * this.height
    }
    calculateRange(){
        return 2*(this.width * this.height)
    }

}
var rect = new Rect(10, 20)
console.log(rect)