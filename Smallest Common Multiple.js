//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {

  arr = arr.sort((a, b) => a - b);
  var arr2 = [arr[0]];
  for (i = arr[0] + 1; i <= arr[1]; i++) {
    arr2.push(i);
  }
  return arr2;

}


console.log(smallestCommons([2, 5]));