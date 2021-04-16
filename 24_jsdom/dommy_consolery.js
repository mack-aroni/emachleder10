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
          func : function(x) { // can call this function via o["func"](x)
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
}; // Q: how does creating a list within a function and altering the list affect the webpage? the html is not based on the list that is created.


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); //turns the list items into an array
  listitems[n].remove(); //deleted the list item n
}; // Q: similar Q, how does the document get altered by the variable listitems


var red = function() {
  var items = document.getElementsByTagName("li"); //turns the list items into a one dimensional array (list)
  for(var i = 0; i < items.length; i++) { //iterates through all the list items
    items[i].classList.add('red'); //adds red onto the list of classes for each item **if a class list already includes red then it is not added again
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li"); //turns the list items in to an array
  for(var i = 0; i < items.length; i++) { //iterates through all list items
    if (i%2==0){
      items[i].classList.add('red'); //if index is even, add red onto the list of classes
    } else {
      items[i].classList.add('blue'); //if index is odd, add blue onto the list of classes

      // **if a color already exists in a class list, then it does not get added again
    }
  }
};

//function(e) creates an event object and assigns it to a handler (in this case e)
//the behaviour of the selected object can be modified (ex: open link in a new tab)
var buttonCallback = function(e) { //when called prints the following
  console.log("\n\nhere comes e...");
  console.log(e); // if the function is called on it's own: e is undefined because the object has not been created yet (because the function was not assigned to an event, meaning the event never happened and the function didn't get triggered)
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}


var b = document.getElementById('b'); // assigns the id of the button to var b
b.addEventListener('click', buttonCallback); // when the button is clicked, executes buttonCallback
// since buttonCallback is function(e), when the button is clicked, an event object handler 'e' is created


var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---") 
  console.log(this);
  this.classList.add('red'); // adds red to the class list of that item
}

var thelist = document.getElementById("thelist"); // turns the list "thelist" into an array
var litems = thelist.children; // turns the array thelist into an array of its children (pure values)
for(var i = 0; i < litems.length; i++) { // iterates through the array of children
  litems[i].addEventListener('click', redCallback); // when an item is clicked, call redCallback on it (adding red to that items list of classes)
  litems[i].addEventListener('mouseover', function(e){ // when an item is moused over, "toggle" the green class
    console.log("user has moved into this:" + this); // toggling is equivalent to turning a class on or off. if an object has an assigned class, the class is initially on
    this.classList.toggle('green');  // if an "on" class gets toggled, then it gets turned "off" and vice versa
  });
  litems[i].addEventListener('mouseout', function(e){  // when the mouse over is removed, "toggle" the blue class
    console.log("user has moved out of this:" + this); // if an object doesn't have the class that is being toggled, that class is temporarily added to the class list **the class can be toggled on/off for the duration of that session
    this.classList.toggle('blue'); // toggling the classes in this manner allows the items to rotate in color. when all classes are "off", the text color is the default: black.
    // when one class is "on", the text color is that class. when more than one class is on, the text color is whichever class is last (right-most class)
  });
}