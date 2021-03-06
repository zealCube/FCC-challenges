//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
    arr.sort( (a,b) => a-b); //sorts the array in ascending order
    let x = arr[0];
    let y = arr[1];
    return ((y*y)+y-(x*x)+x)/2  // formula for the sum
}
  
  console.log(sumAll([5,4]));


//sumAll([1, 4]) should return 10.
//sumAll([4, 1]) should return 10.
//sumAll([5, 10]) should return 45.
//sumAll([10, 5]) should return 45.