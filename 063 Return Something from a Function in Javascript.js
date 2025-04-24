function addAll(arguments){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(addAll(1,2,3))


function person(name, email){
    return{
        name: name,
        email: email
    }
}
var p1 = person("Cat", "cat@gmail.com")
console.log(p1)