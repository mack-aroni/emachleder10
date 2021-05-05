// Crabtastic -- Dragos Lup, Karl Hernandez, Ethan M
// SoftDev pd1
// K25 -- canvas based JS drawing
// 2021-05-03m

//e.preventDefault()
//Tells the user agent that the default action should not be taken as it usually is. For example, when clicking a checkbox, it would tell the box to not check.

//CanvasRenderingContext2D.beginPath()
//Begins a line by emptying the list of sub-paths. Allows you to create a new line.

//MouseEvent.offsetX/Y
//Retuns the X or Y coordinate of the mouse relative to the target element
//In our testing we found this is relative to the top left of the element.

//Gets the canvas
const canvas = document.getElementById("crab-canvas");
//Stores the canvas for drawing
const ctx = canvas.getContext("2d");

//Stores the first coord
let coordstore = [0,0];
//Is this the first coordinate (if rect)
let isFirst = true;

//Gets the toggle button
let state = document.getElementById("toggle");
//Gives the toggle button rect value
state.val = "rect";

//Begins the first rectangle, This is mostly for testing purpose.
ctx.beginPath();
//Sets the fill color
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Clears the board.
let clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//Gets the clear button
let cbutton = document.getElementById('clear');
//Waits for the user to click on the button
cbutton.addEventListener('click', clear);

//Toggles the toggle button from rect to dot.
let toggle = () => {
  //Gets the toggle button
  let state = document.getElementById("toggle");
  let currentState = state.val;
  if (currentState == "rect") {
    //Sets the value to dot
    state.val = "dot";
    //Sets the visible text
    state.innerText = "Toggle:dot";
  } else {
    isFirst = true;
    state.val = "rect";
    state.innerText = "Toggle:rect";
  }
}

//Get the toggle button
let tbutton = document.getElementById('toggle');
//Listens for the toggle button to get clicked
tbutton.addEventListener('click', toggle);

let draw = (e) => {
  let state = document.getElementById("toggle");
  let currentState = state.val;
  //Begins drawing
  ctx.beginPath();
  //Sets the fillstyle to black
  ctx.fillStyle = "black";
  //Get the x and y coords
  let x = e.offsetX;
  let y = e.offsetY;
  //Consol log for testing purposes
  //console.log("x:" + x + " and y:" + y);

  //If this is a dot
  if (currentState == "dot") {
    //Draw a 3 pixel rectangle. This should be 1 pixel, but its 3 so you can see it.
    ctx.fillRect(x,y,3,3);
  } else {
    //If this is the first dot.
    if (isFirst){
      //Store the first dot, 
      coordstore = [x,y];
      //Next dot will be the second one
      isFirst = false;
    } else {
      //Do the funny math to find out the center of the rectangle, and the height and width
      ctx.fillRect(coordstore[0],coordstore[1],e.offsetX-coordstore[0],e.offsetY-coordstore[1]);
      //Next dot will be the first one
      isFirst = true;
    }
  }
}

//Listen for when the canvas will be clicked.
canvas.addEventListener('click', draw);