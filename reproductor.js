
var musica = document.getElementById("audio");


function reproducir () {
 musica.play();
}

function pausar() {
  musica.pause();
}

function parar () {
  musica.load();
}

function retroceder () {
musica.currentTime -= 2;
}

function avanzar () {
musica.currentTime += 2;
}


function volumenAlto () {
  musica.volume+=0.1;
}

function volumenBajo () {
  musica.volume-=0.1;
}

musica.ontimeupdate = function() {
    var rango = document.getElementById("barraDeProgreso")
    rango.value = musica.currentTime;
};
