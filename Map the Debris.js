// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// more details on FCC

// T = 2pi * orbit axis  

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    arr.forEach(x => {
        var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(x.avgAlt + earthRadius, 3) / GM));
        delete x.avgAlt;
        x.orbitalPeriod = tmp;
    });
    return arr;
}

console.log(orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]));