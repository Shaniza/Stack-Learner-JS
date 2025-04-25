if(true){
    if(true){
        var b = "Rabbit"
    }
    
}
console.log(b)

function x(){
    function y(){
        var c = "Cat"
    }

}
//console.log(c)// this line will cause error, 
                // as c is in the block, can't be accessibel from outside


function test(n){
    function a(){
        return n%3 == 0
    }

    function b(){
        return n%5 == 0
    }
    if(a() && b()){
        console.log(n+' is divisible by both 3 and 5')
    }else{
        console.log("not a valiid number")
    }
}
test(10)
test(15)