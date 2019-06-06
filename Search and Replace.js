//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word.

function myReplace(str, before, after) {
  if (before.search(/^[A-Z]/) == 0) {
    return str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1)));
  }
  return str.replace(before, after);
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));