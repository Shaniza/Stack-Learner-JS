//First Look at Closure
// var b = 10
// function a() {
//     console.log(b)
// }
// a()

var b = 10
function a(){
    var x = 5
    return function(){
        console.log(x)
    }

}
var abc = a()
console.dir(abc)