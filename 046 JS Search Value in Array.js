var arr = [1, 2, 3, 4, 5, 6]
var find = 1
var isFound = false
for(var i = 0; i< arr.length; i++){
    if(arr[i] == find){
        console.log("data found in index ",i)
        isFound = true
        break
    }else{
        isFound = false
    }
}
if(isFound == false){
    console.log("data not found")
}

// if(!isFound){
//     console.log("Data not found")
// }