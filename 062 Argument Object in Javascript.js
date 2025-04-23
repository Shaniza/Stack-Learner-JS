// var arr1 = [1, 2, 3]
// var arr2 = [1, 2, 3, 4]


// function sumOfArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length ; i++){
//         sum += arr[i]
//     }
//     console.log(sum)

// }
// sumOfArray(arr1)
// sumOfArray(arr2)
function test(){
    // console.log(arguments)
    for(var i =0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
test(1, 2, 3)
test(1, 2, 3, 4, 5, 6, 7)