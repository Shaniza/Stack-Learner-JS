var arr = [1, 2, 3, 4, 5]
var arr1= []
for(i = arr.length - 1; i >= 0; i--){
    arr1.push(arr[i])
}
console.log(arr1)


//with built-in function
var arr3 = [1, 5, 10, 15, 20]
console.log(arr3.reverse())