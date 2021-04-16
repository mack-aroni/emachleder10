// Team Orange :: Ishita Gupta, Ethan Machleder 
// SoftDev pd1
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here

// define function factI with parameter num
function factI(num) {
    // iteratively multiplies numbers to output (default 1) until num is reached
    var output = 1
    for (i = 2; i <= num; i++) {
        output = output * i;
    }
    // returns output
    return output;
}

function factR(num) {
    // base case: if num is 1 return 1
    if (num == 1) {
        return 1;
    }
    // otherwise recursively call function until num = 1
    return num * factR(num - 1);
}

function fibI(num) {
    // define two variables representing "last two elements" of current fibonacci sequence
    var first = 1;
    var second = 1;
    // iteratively adds last two elements to generate a third and updates what last two elements are
    for (i = 3; i <= num; i++) {
        second = first + second;
        first = second - first;
    }
    return second;
}

function fibR(num) {
    // if num is 1 or 2 return 1
    if (num == 1 || num == 2) {
        return 1;
    }
    // otherwise return the sum of previous two elements in fibonacci sequence
    return fibR(num - 1) + fibR(num - 2);
}

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
function gcd(a, b) {
    // starting at the smaller number, increment down by 1 
    for (i = Math.min(a, b); i > 0; i--) {
        // check if both numbers are divisible by i
        if ((a % i === 0) && (b % i === 0)) {
            // return the gcd
            return i
        }
    }
}

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
function randomStudent() {
    // create a list of names
    var names = ["1", "2", "3", "4", "5", "6", "7", "8"]
    // pick a random number from 0 to the length of the list - 1
    var index = Math.floor(Math.random() * names.length);
    // return the name at that index
    return names[index]
}