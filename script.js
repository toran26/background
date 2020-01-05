var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

window.onload = setGradient(); /* page load hune bittikai gradient property display pani garchha ra initial value anusar
								background pani change garchha */

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")"; 
	css.textContent = body.style.background ;
}

function getRandomColor() //random color generation ko laagi
{
	color1.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	color2.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	setGradient();
}

color1.addEventListener("input", setGradient);
random.addEventListener("click", getRandomColor);
color2.addEventListener("input", setGradient);

