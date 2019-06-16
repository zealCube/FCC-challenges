/*Given the array arr, iterate through and remove each element starting from the first element,
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr=[]*/

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        return func(arr[i]) ? arr.shift() : arr; //if not true, modify array by removing first element
                                                // if true, return the modified array
    }
    return arr;
}

console.log(dropElements([8, 4, 5, 3], function (n) {
    return n < 5;
}));