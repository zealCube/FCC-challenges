//Pig Latin takes the first consonant (or consonant cluster) of an English word, 
//moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) {
        return str + "way";
    } else {
        return str.replace(/(^[^aeiou]+)/g, "").concat(str.match(/^[^aeiou]+/g) + "ay");
    }
}
// I would personally consider "y" a vowel here and include it in the RegExp but FCC fails
// last challenge "should handle words without vowels"
// afaik in Pig Latin output for "my" should be "ymay" and not "myay", but who knows
console.log(translatePigLatin("my"));