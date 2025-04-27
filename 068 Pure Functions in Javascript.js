function sqr(n){
    return n*n
}
console.log(sqr(2))

var a = 10
function change(){
    a = 100
}
console.log(a)

var b = 10
function change(){
    b = 100
}
change()
console.log(b)

var point = {
    p:5,
    q:6
}
console.log(point)
function printPoint(){
    point.p = 11
    point.q = 12
}
console.log(point)
printPoint(point)
console.log(point)
console.log(typeof point)