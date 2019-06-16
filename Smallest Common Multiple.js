//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

	if(arr[0] > arr[1]) (arr = [arr[1], arr[0]]);

	for(x = result = arr[0]; x <= arr[1]; x++) {
		result = lcm(x, result);
	}
	
	return result; 
}


console.log(smallestCommons([25, 5]));

//I borrowed couple ouf things and put them together