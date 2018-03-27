var bunny = document.getElementById("bunny");

document.getElementById("playpause").addEventListener("click", playpause);
function playpause () {
	if (bunny.paused) {bunny.play();}
	else {bunny.pause();}
}
