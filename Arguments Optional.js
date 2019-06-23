/* see corresponding FCC challenge*/

function addTogether() {
    var arg = Array.from(arguments);
    if (arg.some(n => typeof n !== "number") || arg.lenth > 2) {
        return undefined;
    }
    if (arg.length === 2) {
        return arg[0] + arg[1];
    } else if (arg.length == 1) {
        let a = arg[0];
        return (b => (typeof b !== "number") ? undefined : (a + b));
    }
}


console.log(addTogether(4)(5));