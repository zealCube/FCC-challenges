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

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "G") {
            arr[i].push("C");
        } else if (arr[i] == "C") {
            arr[i].push("G");
        } else if (arr[i] == "T") {
            arr[i].push("A");
        } else if (arr[i] == "A") {
            arr[i].push("T");
        }
    }

    return arr;
}

console.log(pairElement("GCG"));