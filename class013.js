var str = '1000'
var n = 10
console.log(str * n)
console.log(str + n)

console.log(Number.parseInt(str))
console.log(n.toString())

//falsy value
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))


console.log(`"a string fdfdfdfdfdfd" `+Boolean("fdfdfdfdfdfd")) //true
console.log("0 "+Boolean(0)) //false
console.log("-52 "+Boolean(-52)) //true
console.log("26 "+Boolean(26))

console.log("-0 "+Boolean(-0))
console.log("+0 "+Boolean(+0)) 

console.log(true) //true. true is not string
var x = true
console.log(x.toString())  //string 


// Number Constructor
let p = Number("123");        // 123 (as number)
let q = new Number("123");    // Number object
console.log(p)
console.log(q)
