var autor;
var reproducir, playpause, barra, enmudir;
var i;
var aleatorio;
var lastSong;
var imgCover;

var autorPosiciones = {
    "Nicolas Jaar": 0,
    "Loco Playa": 1,
    "Red Hot Chili Peppers": 2,
    "Bad Bunny": 3,
    "kaseO": 4
};

var tituloCanciones = [];
tituloCanciones["Nicolas Jaar"] = ['A time for us', 'And I say', 'Lets Live For Today', 'El bandido', 'Mi mujer'];

tituloCanciones["Loco Playa"] = ['Los porros no dan sueño', 'Mucho', 'Poco', 'Crazy', 'Cuelga tú', 'Más fresco', 'Vamoavé'];

tituloCanciones["Red Hot Chili Peppers"] = ['Californication', ' Otherside', ' Scar Tissue', 'Under The Bridge'];

tituloCanciones["Bad Bunny"] = ['Amor Foda', 'Mia', 'Caro', 'Ni bien ni mal'];

tituloCanciones["kaseO"] = ['Viejos ciegos', 'Mitad y mitad', 'Maza y catapultas', 'Esto no para', 'Yemen'];

var songz = [];
songz["Nicolas Jaar"] = ['audio/nicolasJaar/NicolasJaarAtimeforus.mp3', 'audio/nicolasJaar/NicolasJaarAndISay.mp3', 'audio/nicolasJaar/NicolasJaarLetSLiveForToday.mp3', 'audio/nicolasJaar/NicolasJaarElBandido.mp3', 'audio/nicolasJaar/NicolasJaarMiMujer.mp3'];

songz["Loco Playa"] = ['audio/locoPlaya/10. Locoplaya - Los porros no dan sueño.mp3', 'audio/locoPlaya/BEJO - MUCHO  (Vidéo).mp3', 'audio/locoPlaya/BEJO - POCO (Vidéo).mp3', 'audio/locoPlaya/LOCOPLAYA - CRAZY (Vidéo).mp3', 'audio/locoPlaya/LOCOPLAYA - CUELGA TÚ (VIDÉO).mp3', 'audio/locoPlaya/LOCOPLAYA - MÁS FRESCO (Videoclip).mp3', 'audio/locoPlaya/LOCOPLAYA - VAMOAVÉ (VIDÉO).mp3'];

songz["Red Hot Chili Peppers"] = ['audio/chilliHotPepper/Red Hot Chili Peppers - Californication [Official Music Video].mp3', 'audio/chilliHotPepper/Red Hot Chili Peppers - Otherside [Official Music Video].mp3', 'audio/chilliHotPepper/Red Hot Chili Peppers - Scar Tissue [Official Music Video].mp3', 'audio/chilliHotPepper/Red Hot Chili Peppers - Under The Bridge [Official Music Video].mp3'];

songz["Bad Bunny"] = ['audio/badBunny/Bad Bunny - Amor Foda  Video Oficial.mp3', 'audio/badBunny/Bad Bunny feat. Drake - Mia ( Video Oficial ).mp3', 'audio/badBunny/Caro - Bad Bunny ( Video Oficial ).mp3', 'audio/badBunny/NI BIEN NI MAL - Bad Bunny  X100PRE.mp3'];

songz["kaseO"] = ['audio/kaseO/KASE.O - 06. VIEJOS CIEGOS con XHELAZZ y SHO HAI Prod  por BIG HOZONE.mp3', 'audio/kaseO/KASE.O - 09. MITAD Y MITAD con NAJWA Prod  JAVATO JONES y GONZALO LASHERAS.mp3', 'audio/kaseO/KASE.O - 10. MAZAS Y CATAPULTAS Prod  JAVATO JONES y GONZALO LASHERAS.mp3', 'audio/kaseO/KASE.O - ESTO NO PARA (Prod. CASH FLOW) VideoLyric Oficial.mp3', 'audio/kaseO/KASE.O - YEMEN (Prod. EL ARKEOLOGO) VideoClip Oficial.mp3'];

var coverCanciones = [];

coverCanciones["Nicolas Jaar"] = ['img/jaarATimeForUs.jpg', 'img/jaarAndISay.jpg', 'img/jaarLive.jpg', 'img/jaarBandido.jpg', 'img/jaarMiMujer.jpg'];

coverCanciones["Loco Playa"] = ['img/locoplaya.jpg'];

coverCanciones["Red Hot Chili Peppers"] = ['img/chilli.png'];

coverCanciones["Bad Bunny"] = ['img/badBunny.jpg'];

coverCanciones["kaseO"] = ['img/kaseo.jpg'];



function initVariables() {
    i = 0;
    aleatorio = "false";
    lastSong = {};
    lastSong.index = 0;
    lastSong.lastIndex = lastSong;
    autor = unescape(window.location.search.substring(1));
    imgCover = 0;
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
    document.getElementById('cover').src = coverCanciones[autor][i];
    document.getElementById('reproducir').src = songz[autor][i];
    document.getElementById('cancion').innerHTML = tituloCanciones[autor][i];
    document.getElementById('artista').innerHTML = autor;
    document.getElementsByClassName('fwdmusic').addEventListener('click', fwdmusic);
    document.getElementsByClassName('bckmusic').addEventListener('click', bckmusic);

}

window.onload = function() {
    initVariables();
    iniciaRepro();
    initHtmlVariables();
}



function iniciaRepro() {
    reproducir = document.getElementById('reproducir');
    playpause = document.getElementById('playPause');
    barra = document.getElementById('controlador');
    enmudir = document.getElementById('imgSilenciar');

    //enmudir.addEventListener("click", enmudeix, false);
    //playpause.addEventListener("click", playPause, false);
    barra.addEventListener("change", posicionAudio, false);
    reproducir.addEventListener("timeupdate", actuaTiempo, false);
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

//muted

function enmudeix() {
    if (reproducir.muted) {
        reproducir.muted = false;
        document.getElementById('imgSilenciar').src = 'img/muted.svg';
    } else {
        reproducir.muted = true;
        document.getElementById('imgSilenciar').src = 'img/nomuted.svg';
    }
}

//para pasar el tiempo de la cancion a la barra

function posicionAudio() {
    var vesA = reproducir.duration * (barra.value / 100);
    reproducir.currentTime = vesA;
    console.log(reproduint.currentTime);
}

//para mover la barra sola

function actuaTiempo() {
    var nuevoTiempo = reproducir.currentTime * (100 / reproducir.duration);
    barra.value = nuevoTiempo;
    console.log(barra.value);
}

function fwdmusic() {
    var currentSong = {};
    currentSong.index = i;
    currentSong.lastIndex = lastSong;
    lastSong = currentSong;

    if (aleatorio == "true") {
        i = Math.trunc(Math.random() * songz[autor].length);
    } else {
        i++;
        if (i == songz[autor].length) {
            i = 0;
        }
    }

    if (i < coverCanciones[autor].lenght) {
        imgCover = i;
    } else {
        imgCover = 0;
    }


    document.getElementById('reproducir').src = songz[autor][i];
    document.getElementById('cancion').innerHTML = tituloCanciones[autor][i];
    document.getElementById('artista').innerHTML = autor;

}

function bckmusic() {
    if (aleatorio == "true") {
        i = lastSong.index;
        lastSong = lastSong.lastIndex;
    } else {
		i--;
		if (i == -1) {
			i = songz[autor].length - 1;
		}
    }

    if (i < coverCanciones[autor].lenght)
        imgCover = i;
    else
        imgCover = 0;


    document.getElementById('reproducir').src = songz[autor][i];
    document.getElementById('cancion').innerHTML = tituloCanciones[autor][i];
    document.getElementById('artista').innerHTML = autor;
}

function toggleAleatorio() {
    if (aleatorio == "false") {
        aleatorio = "true";
        document.getElementById('imgAleatorio').src = 'img/aleatorio.svg';
    } else if (aleatorio == "true") {
        aleatorio = "false";
        document.getElementById('imgAleatorio').src = 'img/bucle.svg';
    }

}
