var addition = function(a,b){ //anonymous function
    return a+b
}
console.log(addition(10, 20))

setTimeout(function(){
    console.log("I will call you 5s later")

}, 5000)

var another = function(){

}
console.log(another)

var other = addition
console.log(addition(1,4))