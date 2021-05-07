// Crabtastic -- Dragos Lup, Karl Hernandez, Ethan M
// SoftDev pd1
// K26 -- canvas based JS animation
// 2021-05-05w

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "orange";

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
	console.log("clear invoked...")
	ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
	dotButton.disabled = true;
	console.log("drawDot invoked...")
	clear();
	if (growing) {
		radius += 1;
		if (radius >= c.width/2) {
			growing = false;
		}
	}
	else {
		radius -= 1;
		if (radius <= 0) {
			growing = true;
		}
	}
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI); //draws circle
	ctx.fill();
//	window.cancelAnimationFrame(); //not necessary, will use stopIt
	requestID = window.requestAnimationFrame(drawDot); //stores circle frame
};


//var stopIt = function() {
var stopIt = () => {
	dotButton.disabled = false; //didn't need to use preventDefault
	console.log("stopIt invoked...")
	console.log( requestID );
	window.cancelAnimationFrame(requestID) //stops animation at frame
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );