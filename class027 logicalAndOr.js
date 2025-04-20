var name = ''
var fullname = name || "HM NAYEM"
console.log(fullname)

var name2 = 'NOSTOK'
var fullname2 = name2 || "HM NAYEM"
console.log(fullname2)

var isOK = true
isOK && console.log("Everything is OK")

var notOK = false
console.log(notOK || console.log("Everything is OK"))