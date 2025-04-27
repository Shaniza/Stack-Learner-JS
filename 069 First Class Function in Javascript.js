//first class function will fulfill the points below:
function add(a, b){
    return a+b
}
//1. A function can be stored in a variable
var sum = add
console.log(sum(1,3))
console.log(typeof sum)

//2. A function can be stored in an array
var arr = []
arr.push(add)
console.log(arr) 
console.log(arr[0](1,8))
// console.log(arr[1](2,3))

//3. A function can be stored in an object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(2,3))
//4. We can create function as need
setTimeout(function(){
    console.log("I have created .......")
}, 5000)
//5. We can pass function as arguments
//6. We can return functions from another function
