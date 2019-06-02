//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
//Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    //var keys = Object.keys(source);

    return collection.filter(function (x) {
        for (let key in source) {       // if you use (let .. in, insteaf of "let .. of" you do not have to use separate object in keys)
            if (!x.hasOwnProperty(key) || x[key] !== source[key]) {
                return false;
            }
        }
        return true;
    });
}

console.log(whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}));