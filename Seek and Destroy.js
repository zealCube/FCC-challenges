//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter( x => !args.includes(x));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));