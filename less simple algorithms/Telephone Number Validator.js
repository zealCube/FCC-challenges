//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    if (str.match(/[0-9]/g).length > 11 | str.match(/[0-9]/g).length < 10) {
        return false;
    } else if (str.match(/[0-9]/g).length == 11) {
        if (str.charAt(0) != 1) {
            return false;
        } else if (str.match(/[()]/g).length % 2 == 0 && str.charAt(0) != "(") {
                return true;
            }
            return false;

    } else if (str.match(/[0-9]/g).length == 10) {
        if (str.match(/[()]/g).length % 2 == 0 && str.charAt(0) != "(") {
            return true;
        }
        return false;
    }
}

console.log(telephoneCheck("1 555 555-5555"));