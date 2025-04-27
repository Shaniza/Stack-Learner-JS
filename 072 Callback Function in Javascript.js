// function sample(a,b){
//     var c = a+b
//     var d = a-b
//     var result = sum(c,d)
//     return result
// }
// function sum(a,b){
//     return a+b 
// }
// console.log(sample(6,5))

//using callback
function sample(a,b,cb){ //cb = callback function
    var c = a+b
    var d = a-b
    var result = cb(c,d)
    return result
}
function sum(a,b){
    return a+b 
}
console.log(sample(6,5,sum))

//now,adding and subtracting
function sample(a,b,cb){
    var c = a+b
    var d = a-b
    var result = cb(c,d)
    return result
}

// var result = sample(6,5,function(c, d){
//     console.log(c,d) 
// })

var sub = sample(4,3,function(c,d){
    return c-d //(a+b) - (a-b)=(4+3)-(4-3)=7-1=6
})
console.log(sub)

//multiply
var mul = sample(4,3, function(c,d){
    return c*d
})
console.log(mul)
