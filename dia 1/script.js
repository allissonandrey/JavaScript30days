
function change(id){
    let keyDrum = document.getElementById(id);
    
    keyDrum.classList.add('playing');
    setTimeout( () => {
        let keyDrum = document.getElementById(id);
        keyDrum.classList.remove('playing');
    }, 90);

}

function keyEvent(event){
    console.log(event);
    switch (event.keyCode) {
        case 97:
            const musica = new Audio('sounds/clap.wav');
            musica.play();
            change('97');
            break;

        case 115:
            const musica1 = new Audio('sounds/hihat.wav');
            musica1.play();
            change('115');
            break;

        case 100:
            const musica2 = new Audio('sounds/kick.wav');
            musica2.play();
            change('100');
            break;

        case 102:
            const musica3 = new Audio('sounds/openhat.wav');
            musica3.play();
            change('102');
            break;

        case 104:
            const musica4 = new Audio('sounds/boom.wav');
            musica4.play();
            change('104');
            break;
        
        case 106:
            const musica5 = new Audio('sounds/ride.wav');
            musica5.play();
            change('106');
            break;

        case 107:
            const musica6 = new Audio('sounds/snare.wav');
            musica6.play();
            change('107');
            break;
        
        case 108:
            const musica7 = new Audio('sounds/tom.wav');
            musica7.play();
            change('108');
            break;
       
            case 231:
            const musica8 = new Audio('sounds/tink.wav');
            musica8.play();
            change('231');
            break;

            default:
                alert("Essa tecla não toca nada, jogador!");
    }
}