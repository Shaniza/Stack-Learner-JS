var arr = [1, 2, 3, 4, 5]

// adding
// var sum = arr.reduce(function (prev, curr){
//     return prev+curr
// }, 100)
// console.log(sum)

//max value finding
var max = arr.reduce(function (prev,curr){
    return Math.max(prev,curr)
}, 0)
console.log(max)


//how reduce work manually
function myReduce(arr, callback, accumulator){
    for(var i=0; i< arr.length; i++){
        accumulator = callback(accumulator, arr[i])

    }
    return accumulator
}
//sum
var sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)
//max
var max = myReduce(arr, function(prev, curr){
    return Math.max(prev,curr)
},0)
//min
var min = myReduce(arr, function(prev, curr){
    return Math.min(prev,curr)
},arr[0]) //if initial value 0 is provided , min value will be 0 ,
        //even if 0 wasn't in the array, that's why arr[0] is given, 
        //so that, the initial value can surely found at the array 