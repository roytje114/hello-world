var colors = ["red", "blue", "yellow", "purple", "green", "brown", "orange", "pink"];


function randomColor()
{
	var rand = colors[Math.floor(Math.random() * colors.length)];
	document.getElementById("text").style.color = rand;
}