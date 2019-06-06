//Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {     //This does not run in FCC, but I can not figure out why
    var arr = [];
    while (arr.push([]) < str.length);
    var arr2 = str.split("");
    for (let i = 0; i < arr2.length; i++) {
        arr[i].splice(i, 0, arr2[i]);
    }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == "G") {
                arr[j].push("C");
            } else if (arr[j] == "C") {
                arr[j].push("G");
            } else if (arr[j] == "T") {
                arr[j].push("A");
            } else if (arr[j] == "A") {
                arr[j].push("T");
            }
        }

    return arr;
}

console.log(pairElement("GCTAG"));