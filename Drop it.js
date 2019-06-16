/*Given the array arr, iterate through and remove each element starting from the first element,
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr=[]*/

function dropElements(arr, func) {
    var times=arr.length;
    for (let i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

console.log(dropElements([8, 4, 6, 3], function (n) {
    return n < 2;
}));