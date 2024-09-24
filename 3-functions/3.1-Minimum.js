function min(a, b) {
    return a < b ? a : b;
}

function test() {
    console.assert(min(0, 10) === 0);
    console.assert(min(0, -10) === -10);
    console.assert(min(1, 2) === 1);
    console.assert(min(2, 1) === 1);
    console.assert(min(0, 0) === 0);
    console.assert(min(10, 10) === 10);
}

test()