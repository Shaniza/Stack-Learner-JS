 var arr = [1, 2, 3]
//  var sqrArr = arr.map(function(value){
    //return Math.round(Math.random() * 100)
    // return value*value
//  })

//  console.log(arr)
//  console.log(sqrArr)

 //implementing map without built in map function

// var myArr = [] 
// function map(arr){
//     for(var i=0; i< arr.length; i++){
//         myArr.push(arr[i]*arr[i])
//     }
//     return myArr
    
//  }

// console.log(map(arr)) 

//using callback
function myMap(arr, callback){
    var newArr = []
    for(var i = 0; i < arr.length ; i++){
        var temp = callback(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var callback = myMap(arr, function(value){
    return value*value*value
})
var multiplyByTen = myMap(arr, function(value){
    return value*10
})
console.log(arr)
console.log(callback)
console.log(multiplyByTen)