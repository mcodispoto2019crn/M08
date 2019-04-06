window.onload = function(){
	var toggleButton = document.querySelector('.toggleButton').addEventListener('click',function(){
		var border = document.querySelector('.border').classList.toggle("activeBorder");
		var button = document.querySelector('.button').classList.toggle("active");
		var day = document.querySelector('.day').classList.toggle("night");
	});
	iniciaRepro();
	document.getElementsByClassName('fwdmusic').addEventListener('click',fwdmusic);
	document.getElementsByClassName('bckmusic').addEventListener('click',bckmusic);


}

  var reproducir, playpause, barra;

  function iniciaRepro(){
    reproducir = document.getElementById('reproducir');
    playpause = document.getElementById('playPause');
    barra = document.getElementById('controlador');


    playpause.addEventListener("click", playPause, false);
    barra.addEventListener("change", posicionAudio, false);
    reproducir.addEventListener("timeupdate", actuaTiempo, false);
  }



//para play y pausa,

  function playPause() {
    if(reproducir.paused){
      reproducir.play();
      playpause.blur();
    }
    else{
      reproducir.pause();
      playpause.focus();
    }
  }

//para pasar el tiempo de la cancion a la barra

  function posicionAudio(){

    var vesA = reproducir.duration *(barra.value / 100);
    reproducir.currentTime = vesA;
		console.log(reproduint.currentTime);
  }

//para mover la barra sola

  function actuaTiempo(){
    var nuevoTiempo= reproducir.currentTime *(100/reproducir.duration);
    barra.value= nuevoTiempo;
		console.log(barra.value);
  }

	var canciones=['A time for us','And I say','Lets Live For Today','El bandido','Mi mujer'];
	var songz=['audio/nicolasJaar/NicolasJaarAtimeforus.mp3','audio/nicolasJaar/NicolasJaarAndISay.mp3','audio/nicolasJaar/NicolasJaarLetSLiveForToday.mp3','audio/nicolasJaar/NicolasJaarElBandido.mp3','audio/nicolasJaar/NicolasJaarMiMujer.mp3'];
	var i=0;
	var aleatorio= "false";
	var lastSong={};
	lastSong.index = 0;
  lastSong.lastIndex = lastSong;


  function fwdmusic(){
		var currentSong={};
    currentSong.index = i;
    currentSong.lastIndex = lastSong;
    lastSong = currentSong;

	if (aleatorio == "true"){

			 i = Math.trunc(Math.random()*songz.length);

	 }
	 else{
      i++;
      if (i==songz.length) {i=0;}
    }

	 document.getElementById('reproducir').src=songz[i];
	 document.getElementById('cancion').innerHTML=canciones[i];
 }

	function bckmusic(){
		if (aleatorio == "true"){
			i = lastSong.index;
			lastSong = lastSong.lastIndex;

		 }
		 else{
			 if (i==0) {i=songz.length-1;} else {i--;}
		 }

	document.getElementById('reproducir').src=songz[i];
	document.getElementById('cancion').innerHTML=canciones[i];
	}

function toggleAleatorio(){
	if (aleatorio == "false"){
		aleatorio = "true";
		document.getElementById('aleatorio').children[0].src='img/luna.png';
	}
	else if (aleatorio == "true"){
		aleatorio = "false";
		document.getElementById('aleatorio').children[0].src='img/sol.png';
	}
}
