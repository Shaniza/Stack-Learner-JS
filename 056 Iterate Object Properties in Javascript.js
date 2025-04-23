var obj = {
    x : 10,
    y : 20,
    c : 30
}
for(var i in obj){
    console.log(i)
    console.log(i + ':'+ obj[i])
}