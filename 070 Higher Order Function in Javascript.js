// //5. we can pass function as arguments
// function add(a, b){
//     return a+b
// }
// function manipulate(a, b, func){ //function as argument, here func=add()
//     var c = a+b
//     var d = a-b

//     function multiply(){
//         var m = func(a, b)
//         return c*d*m
//     }
//     return multiply

// }
// var multiply = manipulate(4, 3, add)
// console.log(multiply())


//6. we can return function from another function

function add(a, b){
    return a+b
}
function manipulate(a, b, func){
    var c = a+b
    var d = a-b

    //return function
    return function(){
        var m = func(a, b)
        return c*d*m
    }

}
var multiply = manipulate(4, 3, add)
console.log(multiply())