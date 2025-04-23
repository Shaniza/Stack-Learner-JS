var obj = {
    x:20,
    y:30,
    z:40
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//make a copy of obj

var obj2 = Object.assign({},obj)
obj2.x = 100
console.log(obj)
console.log(obj2)