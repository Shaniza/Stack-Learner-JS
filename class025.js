//JS Logical Operators-video 25
var a = 30
var b = 20
var c = 40
var d = 50

if(a>b && c>d){
    console.log("A is greater than B and C is greater than D")
}else{
    console.log("At least one condition is false")
}    

if(a>b || c>d){
    console.log("A is greater than B and C is greater than D")
}else{
    console.log("At least one condition is false")
}

var check1 = !(a>b)
console.log("Inversion of (a>b):", check1)

var check2 = !(c>d)

console.log("Inversion of (c>d):", check2)