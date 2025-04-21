var arr = [6, 7, 3, 9, 10]
var sum = 0
for(var i=0; i< arr.length; i++){
    if(arr[i]%2 != 0){
        sum = sum + arr[i]
    }
}
console.log("Sum of odd elements: ",sum)