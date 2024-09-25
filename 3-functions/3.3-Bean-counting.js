function countChar(stringToSearch, charToBeCounted) {
    let count = 0;
    for (let index = 0; index < stringToSearch.length; index++) {
        if (stringToSearch[index] === charToBeCounted) count++;
    }
    return count;

}

function countBs(stringToSearch) {
    return countChar(stringToSearch, "B");
}

function test() {
    console.assert(countBs("BOB") === 2, "❌ BOB");
    console.assert(countBs("bob") === 0, "❌ bob");
    console.assert(countChar("kakkerlak", "k") === 4, "❌ kakkerlak");
}

test();