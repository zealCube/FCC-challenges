//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let sol = [0,1];
    for (let i = 2; i <= num; i++) {
        sol.push(sol[i - 1] + sol[i - 2]);
    }
    return sol.filter( x => (x%2 !== 0 && x <= num)).reduce((x,y) => x+y);
}

console.log(sumFibs(75024));