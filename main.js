function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
  };

let hiddenX=random(0,399);
let hiddenY=random(0,399);
let count=0;
let backwardCount=20;


const gamePlay=function(event){
    count++;
    backwardCount--;
    if(count>20){
        alert("Game Over! Try again");
        location.reload();
    }
    
let guessX=event.offsetX;
let guessY=event.offsetY;
let distance=distanceMeter(hiddenX,hiddenY,guessX,guessY);
if(distance<10){
    $('#status').text("");
    $('#result').text("You win! You used "+ count+ " clicks to find the treasure.")
}else if(distance<20){
    displayStatus("Boiling Hot.");
}else if(distance<50){
    displayStatus("Hot.");
}else if(distance<100){
    displayStatus("Warm, but not hot yet.");
}else if(distance<200){
    displayStatus("Warm.");
}else if(distance<320){
    displayStatus("Cold.");
}else{ displayStatus("Freezing Cold.");}

};
function displayStatus(message){
    $('#status').text(message+ " You have "+ backwardCount +" attempts left.");
};

function distanceMeter(hiddenX,hiddenY,guessX,guessY){
    let dx = hiddenX - guessX;
    let dy = hiddenY - guessY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}


$('img').click(gamePlay);
