function chessboard(size = 8) {
    let output = "";
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            column % 2 ? output += " " : output += "#";
            if (column % 8 === 0) {
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