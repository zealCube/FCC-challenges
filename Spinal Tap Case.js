//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str2 = str.replace(/([A-Z])/g, ' $1').split(/\W+|_/g).filter(x => x !== "").join("-").toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_show'));