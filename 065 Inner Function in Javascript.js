//inner function (nested function)
// function something(greet, name){
//     function sayHI(){
//         console.log(greet, name)
//     }
//     sayHI()
// }

// something("Good morning", "Cat")


function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }

    var message = greet+ " " + getFirstName()
    return message
}
console.log(something("Good morning", "Meow Cat"))
console.log(something("Good morning"))