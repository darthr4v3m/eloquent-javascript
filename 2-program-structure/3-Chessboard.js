function chessboard(size = 8) {
    let output = "";
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            if ((row + column) % 2 === 0) {
                output += " ";
            } else {
                output += "#";
            }
            if (column % size === 0) {
                output += "\n";
            }
        }
    }
    return output;
}

function test() {
    console.log(chessboard());
}

test();