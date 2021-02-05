function rotateSecond(second){
    document.getElementById('pSegundos').style.transform = 'rotate('+second+'deg)';
}

function rotateMinute(minute){
    document.getElementById('pMinutos').style.transform = 'rotate('+minute+'deg)';
}

function rotateHour(hour){
    document.getElementById('pHora').style.transform = 'rotate('+hour+'deg)';
}


setInterval(function(){
    let date = new Date();

    let second = date.getSeconds();
    rotateSecond((Math.trunc(360/60)*second));

    let minute = date.getMinutes();
    rotateMinute((Math.trunc(360/60)*minute));

    let hour = date.getHours();
    rotateHour((Math.trunc(360/12)*hour));


},1000);