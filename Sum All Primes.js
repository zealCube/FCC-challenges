//Sum all the prime numbers up to and including the provided number.
//The provided number may not be a prime.

function sumPrimes(num) {
    var res = 0;

    // Function to get the primes up to max in an array
    function getPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }

        return primes;
    }

    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
        res += primes[p];
    }

    return res;
}


console.log(sumPrimes(20));

//solution stole from the net