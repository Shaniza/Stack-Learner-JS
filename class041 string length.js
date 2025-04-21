

var str = 'I am a cat'
var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    } else{
        length++
    }
}
console.log(length)


//using built in function
var str = 'I am a cat'
console.log(str.length)
console.log('I am a cat'.length)