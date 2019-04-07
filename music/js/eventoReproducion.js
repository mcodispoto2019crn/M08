var autor;


window.onload = function(){
	autor= unescape(window.location.search.substring(1));
	document.getElementById('reproducir').src=songz[autorPosiciones[autor]][i];
	document.getElementById('cancion').innerHTML=tituloCanciones[autorPosiciones[autor]][i];
	document.getElementById('artista').innerHTML=autor;

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

	var autorPosiciones = {"Nicolas Jaar":0,"Loco Playa":1,"Red Hot Chili Peppers":2,"Bad Bunny":3, "kaseO":4};

	var tituloCanciones=[];
	tituloCanciones[autorPosiciones["Nicolas Jaar"]]=['A time for us','And I say','Lets Live For Today','El bandido','Mi mujer'];

	tituloCanciones[autorPosiciones["Loco Playa"]]=['Los porros no dan sueño','Mucho','Poco','Crazy','Cuelga tú', 'Más fresco','Vamoavé'];

	tituloCanciones[autorPosiciones["Red Hot Chili Peppers"]]=['Californication',' Otherside',' Scar Tissue','Under The Bridge'];

	tituloCanciones[autorPosiciones["Bad Bunny"]]=['Amor Foda','Mia','Caro','Ni bien ni mal'];

	tituloCanciones[autorPosiciones["kaseO"]]=['Viejos ciegos','Mitad y mitad','Maza y catapultas','Esto no para','Yemen'];

	var songz=[];
	songz[autorPosiciones["Nicolas Jaar"]]=['audio/nicolasJaar/NicolasJaarAtimeforus.mp3','audio/nicolasJaar/NicolasJaarAndISay.mp3','audio/nicolasJaar/NicolasJaarLetSLiveForToday.mp3','audio/nicolasJaar/NicolasJaarElBandido.mp3','audio/nicolasJaar/NicolasJaarMiMujer.mp3'];

	songz[autorPosiciones["Loco Playa"]]=['audio/locoPlaya/10. Locoplaya - Los porros no dan sueño.mp3','audio/locoPlaya/BEJO - MUCHO  (Vidéo).mp3','audio/locoPlaya/BEJO - POCO (Vidéo).mp3','audio/locoPlaya/LOCOPLAYA - CRAZY (Vidéo).mp3','audio/locoPlaya/LOCOPLAYA - CUELGA TÚ (VIDÉO).mp3','audio/locoPlaya/LOCOPLAYA - MÁS FRESCO (Videoclip).mp3','audio/locoPlaya/LOCOPLAYA - VAMOAVÉ (VIDÉO).mp3'];

	songz[autorPosiciones["Red Hot Chili Peppers"]]=['audio/chilliHotPepper/Red Hot Chili Peppers - Californication [Official Music Video].mp3','audio/chilliHotPepper/Red Hot Chili Peppers - Otherside [Official Music Video].mp3','audio/chilliHotPepper/Red Hot Chili Peppers - Scar Tissue [Official Music Video].mp3','audio/chilliHotPepper/Red Hot Chili Peppers - Under The Bridge [Official Music Video].mp3'];

	songz[autorPosiciones["Bad Bunny"]]=['audio/badBunny/Bad Bunny - Amor Foda  Video Oficial.mp3','audio/badBunny/Bad Bunny feat. Drake - Mia ( Video Oficial ).mp3','audio/badBunny/Caro - Bad Bunny ( Video Oficial ).mp3','audio/badBunny/NI BIEN NI MAL - Bad Bunny  X100PRE.mp3'];

	songz[autorPosiciones["kaseO"]]=['audio/kaseO/KASE.O - 06. VIEJOS CIEGOS con XHELAZZ y SHO HAI Prod  por BIG HOZONE.mp3','audio/kaseO/KASE.O - 09. MITAD Y MITAD con NAJWA Prod  JAVATO JONES y GONZALO LASHERAS.mp3','audio/kaseO/KASE.O - 10. MAZAS Y CATAPULTAS Prod  JAVATO JONES y GONZALO LASHERAS.mp3','audio/kaseO/KASE.O - ESTO NO PARA (Prod. CASH FLOW) VideoLyric Oficial.mp3','audio/kaseO/KASE.O - YEMEN (Prod. EL ARKEOLOGO) VideoClip Oficial.mp3'];




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

			 i = Math.trunc(Math.random()*songz[autorPosiciones[autor]].length);

	 }
	 else{
      i++;
      if (i==songz[autorPosiciones[autor]].length) {i=0;}
    }

	 document.getElementById('reproducir').src=songz[autorPosiciones[autor]][i];
	 document.getElementById('cancion').innerHTML=tituloCanciones[autorPosiciones[autor]][i];
	 document.getElementById('artista').innerHTML=autor;
 }

	function bckmusic(){
		if (aleatorio == "true"){
			i = lastSong.index;
			lastSong = lastSong.lastIndex;

		 }
		 else{
			 if (i==0) {i=songz[autorPosiciones[autor]].length-1;} else {i--;}
		 }

	document.getElementById('reproducir').src=songz[autorPosiciones[autor]][i];
	document.getElementById('cancion').innerHTML=tituloCanciones[autorPosiciones[autor]][i];
	document.getElementById('artista').innerHTML=autor;
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
