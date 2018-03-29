var bunny = document.getElementById("bunny");

/*quand on clique sur le bouton play ou sur la video ça fait play pause*/
document.getElementById("playpause").addEventListener("click", playpause);
document.getElementById("bunny").addEventListener("click", playpause);
function playpause () {
	if (bunny.paused) {bunny.play();}
	else {bunny.pause();}
}


