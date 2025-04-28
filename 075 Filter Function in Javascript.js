var arr = [1, 2, 3, 4, 5, 6]
// //filter applied
// var filteredArray = arr.filter(function(value){
//     return value > 4
// })

// console.log(filteredArray)


//implement filter manually
function myFilter(arr){
    var newArr = []
    for(var i = 0; i < arr.length ; i++){
        if(arr[i] % 2 == 0){ //if er vetor call back diye replace kore dei, 
            newArr.push(arr[i]) // jate even ba odd both er jonno ek e code diye kaj chole jay
        }
        else{
            continue
        }
    }
    return newArr
}
console.log(myFilter(arr))