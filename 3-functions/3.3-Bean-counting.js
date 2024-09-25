function countBs(string) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === 'B') count++;
    }
    return count;
}

function test() {
    console.assert(countBs("BOB") === 2, "❌");
    console.assert(countBs("bob") === 0, "❌");
}

test();