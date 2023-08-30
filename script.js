var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");
var r = 0;
var g = 0;
var b = 0;


css.textContent = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")" + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	// console.log(color1.value);
	// console.log(color2.value);

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomValue(){
	return Math.floor(Math.random()*256);
}
function convertToString(x){
	return x.toString(16).padStart(2,'0');
}

function generateRandomRGB(){
	r = randomValue();
	g = randomValue();
	b = randomValue();
	r = convertToString(r);
	g = convertToString(g);
	b = convertToString(b);
}

function hexValue(){
	return "#" + r + g + b;
}

function randomColors(){
	generateRandomRGB();
	color1.value = hexValue();
	generateRandomRGB();
	color2.value = hexValue();
	setGradient();
}

randomButton.addEventListener("click", randomColors);
