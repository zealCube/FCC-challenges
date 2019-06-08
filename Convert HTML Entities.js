//Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
//in a string to their corresponding HTML entities.

function convertHTML(str) {
    var encodedStr = str.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
    return encodedStr;
}

console.log(convertHTML("Dolce & Gabbana"));

//Solution above is returning HTML entities "numbers", but FCC challenge is looking for HTML tags!
// although it is not specified, solution that passes FCC challenge below

function convertHTML(str) {
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&apos;");
    return str;
}

convertHTML("Dolce & Gabbana");