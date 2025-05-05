// function test(){
//     var msg = 'I am learning lexical scope and closure'

//     function sayMsg(){
//         console.log(msg)
//     }

//     sayMsg()
// }

function test(){
    var msg = 'I am learning lexical scope and closure'

    return function(){
        console.log(msg)
    }
}
var sayMsg = test()
sayMsg()