//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome (str){
    var str2 = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var pal = str2.split("").reverse().join(""); //reverses the string and matches the original
    return (pal === str2 ? true : false);
};


console.log(palindrome("eYe;;"));