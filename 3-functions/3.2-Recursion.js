function isEven(a) {
    if (a < 0) a = -a;
    if (a === 0) return true;
    if (a === 1) return false;
    return isEven(a - 2);
}

function test() {
    console.assert(isEven(0) === true, '❌ 0');
    console.assert(isEven(1) === false, '❌ 1');
    console.assert(isEven(2) === true, '❌ 2');
    console.assert(isEven(7) === false, '❌ 7');
    console.assert(isEven(50) === true, '❌ 50');
    console.assert(isEven(75) === false, '❌ 75');
    console.assert(isEven(-1) === false, '❌ -1');
    console.assert(isEven(-12) === true, '❌ -12');
    console.info("Tests are over.");
}

test()