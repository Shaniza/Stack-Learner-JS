var isRunning = true
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log("Winner WInner Chicken Dinner")
        isRunning = false
    }
    else{
        console.log("You have got " + rand)
    }

}