function factI(n){
	var total = 1; //variable to hold total
	for (var x = n; x > 0; x--){ //for loop iterates backwards
		total = total * x;
	}
	return total; //returns the total/factorial
}

function factR(n) {
	if (n === 0) //if n = 0 then it has reached the end of the factorial so return 1
		return 1;
	else
		return n * factR(n-1); //this statement iterates the total of n * n-1 until n = 0 and returns 1
}

function fibI(n) {
	var arr = [0, 1]; //creates an array storing the first 2 terms of the sequence
	for (let x = 2; x < n + 1; x++){ //for loop pushes the next number in the sequence
		arr.push(arr[x - 2] + arr[x -1])
	}
	return arr[n] //returns the last index in the array, which is the nth term of the sequence
}

function fibR(n) {
	if(n < 2) //if n<2 then n is either 0 or 1, the starting terms
        return n;
    else //else return the next term in the sequence which is the last 2 terms added together
        return fibR(n-1) + fibR(n - 2);
}