/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {

    //return arr = arr.flat(5);   if you know the depth

    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));