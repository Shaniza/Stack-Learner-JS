//  var x = 5
//  function test(){
//     console.log(x) //prints 5
//  }

//  test()

var x = 5
function test(){
    var x = 10
   console.log(x) //prints 10, 
   // doesn't go far to search, 
   // while having a value near
}
 
test()