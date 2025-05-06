//this pattern is factory pattern
var createRect = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function(){
            console.log("I am a rectangle")
            this.printProperties()
            //console.log(this)
        },

        printProperties: function(){
            console.log('My width is '+this.width)
            console.log('My height is '+this.height)
        }

    }

}
//1st object created
var rect1 = createRect(10, 8)
rect1.draw()
