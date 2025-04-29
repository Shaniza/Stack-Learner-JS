//find an element 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = arr.find(function(value){
    return value == 9 //returns boolean, if true then retruns the number
})

console.log(result)
//find index
var arrIndex = arr.findIndex(function(value){
    return value == 9
})
console.log(arrIndex)

//find implementation manually
function myfind(arr, callback){
    for(var i = 0; i < arr.length ; i++ ){
        if(callback(arr[i])){
            return arr[i]
        }
    }
}

var resultfind = myfind(arr, function(value){
    return value == 9
})
console.log(resultfind)


//findIndex imnplement manually
function myIndexFind(arr, callback){
    for(var i = 0; i < arr.length ; i++ ){
        if(callback(i)){
            return i
        }
    }
}

var resultIndexFind = myIndexFind(arr, function(value){
    return value == 9
})
console.log(resultIndexFind)