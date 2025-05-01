 //var x = 5
 function test(){
    console.log(x) //prints 5
    function nested(){
        var y = 65
        console.log(x)
    }
    //console.log(y)
    nested()
 }

 test()