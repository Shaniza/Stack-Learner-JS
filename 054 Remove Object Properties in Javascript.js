var point = {
    x : 10,
    y : 20,
    z : 30
}
console.log(point.x)

var obj = new Object({a:10, b: 20})
console.log(obj)

point['y'] = 100
console.log(point)

delete point['x']
console.log(point)