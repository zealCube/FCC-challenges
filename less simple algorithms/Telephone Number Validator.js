//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    if (str.match(/[0-9]/g).length > 11) {
        return false;
    } else if (str.match(/[0-9]/g).length = 11) {
        if (str.charAt(0) != 1) {
            return false;
        } else {



        }

    } else if (str.match(/[0-9]/g).length = 10) {



    } else {
        return false;
    }
}

console.log(telephoneCheck("23555-555-5555"));