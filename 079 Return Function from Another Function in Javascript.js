function greet(msg){
    function greetings(name){
        return msg+', '+name+' !'
    }
    
    return greetings
}
var gm = greet("Good day")
console.log(gm("Anin"))

var gn = greet('Good Night')
var msg = gn("Cat")
console.log(msg)

var hello = greet("Hello")
console.log(hello("Stars"))



//another example

function base(b){
    return function(n){
        var result = 1
        for(var i = 0; i < b; i++){
            result *= n
        }
        return result
    }
}

var base10 = base(3)
console.log(base10) // [Function (anonymous)]
console.log(base10(2)) //8

var base5 = base(5)
console.log(base5(2))