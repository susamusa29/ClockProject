function startTime(){
    var today = new Date(); // properties of full date and time
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var sec = today.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    sec = checkTime(sec);
    switch(sec){
        case 0:
            getNewColour();
            break;
        case 10:
            getNewColour();
            break;
        case 20:
            getNewColour();
            break;
        case 30:
            getNewColour();
            break;
        case 40:
            getNewColour();
            break;
        case 50:
            getNewColour();
            break;
    }
    
    document.getElementById('time').innerHTML = 
    hours + ':' + minutes + ":" + sec;
    var t = setTimeout(startTime, 499);

}

function checkTime(i){
    if (i < 10) {i = "0" + i}; //add zero if below 10
    return i
}

//function to generate random colours
function getNewColour(){

    var symbols, color;
    symbols="123456789ABCDEF";
    color="#";

    for(var i=0; i<6;i++){
        color = color + symbols[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = color;

}
