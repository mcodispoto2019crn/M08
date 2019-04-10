
var reproducir, playpause, barra;
var i;
var autorCanciones, coverCanciones, songz;



function initVariables() {
    i = 0;

    var coverCanciones = [""];

    var autorCanciones = ["Say My Name - David Guetta" , "The road - Flying Decibels" , "Feel like this - Soulkids" , "By the river - Klingande" , " This Girl - Kungs vs Cookin" , " Feel It Still - The Man" , " Later Bitches - The Prince Karma"];

    var songz = ["audio/David Guetta, Bebe Rexha & J Balvin - Say My Name (Official Video).mp3" , "audio/Flying Decibels - The Road (Official Video).mp3" , "audio/Jordi Véliz y Soulkids - Feel Like This.mp3" , "audio/Klingande - By The River (feat. Jamie N Commons).mp3","audio/Kungs vs Cookin' On 3 Burners - This Girl [Original Mix].mp3" , "audio/Portugal. The Man - Feel It Still (Official Video).mp3" , "audio/The Prince Karma - Later Bitches [Ultra Music].mp3"];
}

function initHtmlVariables() {

    var toggleButton = document.querySelector('.toggleButton').addEventListener('click', function() {
        var border = document.querySelector('.border').classList.toggle("activeBorder");
        var button = document.querySelector('.button').classList.toggle("active");
        var day = document.querySelector('.day').classList.toggle("night");
        var ajustes = document.querySelector('.ajustes').classList.toggle("ajustesNight");
        var home = document.querySelector('.home').classList.toggle("homeNight");
        var lupa = document.querySelector('.lupa').classList.toggle("lupaNight");
        var library = document.querySelector('.library').classList.toggle("libraryNight");
    });
    document.getElementById('cover01').src = coverCanciones[i];
    document.getElementById('artista').innerHTML = autorCanciones[i];
    document.getElementById('reproducir').src = songz[i];


}

window.onload = function() {
    initVariables();
    iniciaRepro();
    initHtmlVariables();
}



function iniciaRepro() {
    reproducir = document.getElementById('reproducir');
    playpause = document.getElementById('playPause');
}



//para play y pausa,

function playPause() {
    if (reproducir.paused) {
        reproducir.play();
        playpause.blur();
    } else {
        reproducir.pause();
        playpause.focus();
    }
}
