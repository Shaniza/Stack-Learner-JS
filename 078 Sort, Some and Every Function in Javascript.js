var persons = [
    {
        name: 'A',
        age : 24
    },
    {
        name: 'B',
        age : 19
    },
    {
        name: 'C',
        age : 26
    },
    {
        name: 'D',
        age : 21
    }
]

var arr = [4, 8, 4, 3, 9, 7, 0, 2, 8, 2, 6]
console.log(arr.sort())

var arr1 = [0, 7, 8, 2, 5, -8, -6, -4, 1, 3]
console.log(arr1.sort())
//[-4, -6, -8, 0, 1, 2, 3, 5, 7, 8] - ans is wrong
//to solve this
// console.log(arr1.sort(function(a,b){
//     return a-b //this works fine for negative num
// })) 
arr1.sort(function(a,b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log(arr1)

//for descending order
arr1.sort(function(a,b){
    if(a>b){
        return -1
    }else if(a<b){
        return 1
    }else{
        return 0
    }
})
console.log(arr1)
//directly compare object.age 
persons.sort(function (a,b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(persons)

//every--------------
var arr2 = [2, 4, 6]
var result2 = arr2.every(function(a){
    return a%2 == 0
})
console.log("every element is even - ",result2)

var result3 = arr2.every(function(a){
    return a >= 0
})
console.log("every element is greater than 0 - ",result3)

var arr4 = [1, -3, 5]
var result4 = arr4.every(function(a){
    return a >= 0
})
console.log("every element is positive - ",result4)


//some---------------
var result5 = arr4.some(function(a){
    return a < 0
})
console.log("At least one element is negative -",result5)