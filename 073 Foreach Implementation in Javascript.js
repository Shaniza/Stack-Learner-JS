var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function (value, index, arr){
    console.log(value, index, arr)
     
})
console.log("-----------------------------------")
// console.log(sum)
//ei kaj ta manually kora
var arr1 = [1, 2, 3, 4, 5]

function forEach(arr1, cb){
    for(var i = 0; i < arr1.length ; i++){
        cb(arr[i], i, arr1)

    }
}

forEach(arr1, function(value, index, arr1){
    console.log(value, index, arr1)
    
})
