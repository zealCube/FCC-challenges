//Ceasar cypher using rot13

function rot13(str) { // LBH QVQ VG!
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var tmp = alphabet.concat(alphabet).split("");
  return str.replace(/[A-Z]/g, x => tmp[tmp.indexOf(x) + 13]);

}
// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));