//Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {
    var arr = [];
    while (arr.push([]) < str.length);
    var arr2 = str.split("");
    for (let i = 0; i < arr2.length; i++) {
        arr[i].splice(i, 0, arr2[i]);
    }



    //function pairs(elem) {
    //    if (elem == G) {

    //    }
    //}

    return arr;
}

console.log(pairElement("GCGTAT"));