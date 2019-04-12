
var i;

function initVariables() {
    i = 0;

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

}

window.onload = function() {
    initVariables();
    initHtmlVariables();
}


//para play y pausa,

function playPause(playpause) {
  reproducir = playpause.parentElement.getElementsByClassName("reproducir")[0];
    if (reproducir.paused) {
        reproducir.play();
        playpause.blur();
    } else {
        reproducir.pause();
        playpause.focus();
    }
}
