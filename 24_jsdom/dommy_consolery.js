/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN
   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Orange :: Ethan Machleder, Ishita Gupta
// SoftDev pd1
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-15
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)

console.log("AYO"); //prints "AYO" in the console

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) { //returns j+x as the value of f
  var j=30; //inside j value is used, not outside
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        }; //sets o as a dictionary with values including func as f(x)


//(define fact (lambda (n) ...)
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){ //for loops can use a predefined variable instead of creating a new one
    prod = prod * n;
  }
  return prod; //returns the factorial of n iteratively
};


//(define fact (lambda (n) ...)
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1); //returns the factorial of n recursively
  }
};


var addItem = function(text) {
  var list = document.getElementById("thelist"); //turns the list "thelist" into an array
  var newitem = document.createElement("li"); //creates a new list item in newitem
  newitem.innerHTML = text; //sets the html text in new list item newitem to text
  list.appendChild(newitem); //creates a new list item in the html file called "text"
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); //turns the list items into an array
  listitems[n].remove(); //deleted the list item n
};


var red = function() {
  var items = document.getElementsByTagName("li"); //turns the list items in to an array
  for(var i = 0; i < items.length; i++) { //iterates through all list items
    items[i].classList.add('red'); //if the item has no class, sets class as red
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li"); //turns the list items in to an array
  for(var i = 0; i < items.length; i++) { //iterates through all list items
    if (i%2==0){
      items[i].classList.add('red'); //if index is even and has no class, set to red
    } else {
      items[i].classList.add('blue'); //if index is odd and has no class, set to blue
    }
  }
};


var buttonCallback = function(e) { //when called prints the following
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}


var b = document.getElementById('b');
b.addEventListener('click', buttonCallback); //when the button is clicked, executes buttonCallback


var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---") 
  console.log(this);
  this.classList.add('red'); //sets this (the current item) from blue to red
}

var thelist = document.getElementById("thelist"); //turns the list "thelist" into an array
var litems = thelist.children; //turns the array thelist into an array of its children (pure values)
for(var i = 0; i < litems.length; i++) { //iterates through the array of children
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){ //if moused over, and not blue sets color to green
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){ //if the mouse is taken off, sets color to blue
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}