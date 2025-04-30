//traditional function call
// // function add(a, b, c){
//     return a+b+c
// }
// console.log(add(1,2,3))




//using currying
function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

var result = currying(5)(10)(2)
console.log(result)