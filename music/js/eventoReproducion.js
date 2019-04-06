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
	var aleatorio=false;

	function fwdmusic(){
	  if (i==songz.length-1) {i=0;} else {i++;}
	document.getElementById('reproducir').src=songz[i];
	document.getElementById('cancion').innerHTML=canciones[i];
	if (aleatorio == "true"){
			 i = Math.random()*songz.length;
	 }
	 else{
		 if (i==0) {i=songz.length-1;} else {i--;}
	 }
	 document.getElementById('reproducir').src=songz[i];
	 document.getElementById('cancion').innerHTML=canciones[i];
 }

	function bckmusic(){
	  if (i==0) {i=songz.length-1;} else {i--;}
	document.getElementById('reproducir').src=songz[i];
	document.getElementById('cancion').innerHTML=canciones[i];
	}

	var listado = document.getElementById("aleatorio");
	for (i=0;i<songz.length;i++) {
		var item = document.createElement("button");
		item.innerHTML = songz[i][1];
		listado.appendChild(item);

		}

		numero = Math.random()*songz.length;

		var source= document.createElement('audio');
		audio.src=songz[numero][0];
		audio.type="audio/mpeg";

	function cargarCancion(numero){


	  reproducir.appendChild(audio);

  	reproducir.load();
  	reproducir.play();

  	var texto = document.getElementById("cancion");
  	texto.innerHTML = canciones[numero][1];
		}

		reproducir.addEventListener("ended", function(){
  	cargarCancion(aleatorio());
});
