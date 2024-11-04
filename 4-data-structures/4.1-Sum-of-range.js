/* 
Write a range function 
that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to and including end.
*/

function range(start, end) {
    output = [];
    for (let index = start; index < end + 1; index++) {
        output.push(index);
    }
    return output;
}

function compare(array_1, array_2) {
    if (array_1.length !== array_2.length) return false;

    return array_1.every((element, index) => {
        return element === array_2[index];
    });
}

function testRange() {
    console.assert(compare(range(1, 3), [1, 2, 3]), "❌ [1, 2, 3]");
    console.assert(compare(range(-4, 4), [-4, -3, -2, -1, 0, 1, 2, 3, 4]), "❌ [-4, -3, -2, -1, 0, 1, 2, 3, 4]");
    console.assert(compare(range(0, 0), [0]), "❌ [0]")
}

testRange();

/*
Write a sum function 
that takes an array of numbers 
and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55:
    console.log(sum(range(1, 10)));
*/

function sum(array) {
    output = 0;
    for (let index = 0; index < array.length; index++) {
        output += array[index];
    }
    return output;
}

function testSum() {
    console.assert(sum(range(1, 10)) === 55, "❌ 55");
    console.assert(sum(range(1, 1)) === 1, "❌ 1");
    console.assert(sum(range(1, 2)) === 3, "❌ 3");
}

testSum();

/*
As a bonus assignment, 
modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. 
If no step is given, 
the elements should go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function rangeWithStep(start, end, step) {
    console.log('rangeWithStep with params', start, end, step);
    const _step = step ?? 1;
    output = [start];
    if (_step > 0) {
        while (output[output.length - 1] + _step <= end) {
            const next = output[output.length - 1] + _step;
            if (next > end) {
                return output;
            }
            output.push(next);
        }
    }
    if (step < 0) {
        while (output[output.length - 1] + _step >= end) {
            const next = output[output.length - 1] + _step;
            if (next < end) {
                return output;
            }
            output.push(next);
        }
    }
    return output;
}

function testRangeWithStep() {
    console.assert(compare(rangeWithStep(1, 3), [1, 2, 3]), "❌ [1, 2, 3]");
    console.assert(compare(rangeWithStep(-4, 4), [-4, -3, -2, -1, 0, 1, 2, 3, 4]), "❌ [-4, -3, -2, -1, 0, 1, 2, 3, 4]");
    console.assert(compare(rangeWithStep(0, 0), [0]), "❌ [0]");

    console.assert(compare(rangeWithStep(0, 0, 2), [0]), "❌ [0]");
    console.assert(compare(rangeWithStep(0, 2, 2), [0, 2]), "❌ [0, 2]");
    console.assert(compare(rangeWithStep(0, 2, 3), [0]), "❌ [0]");

    console.assert(compare(rangeWithStep(1, 10, 2), [1, 3, 5, 7, 9]), "❌ [1, 3, 5, 7, 9]");

    console.assert(compare(rangeWithStep(5, 2, -1), [5, 4, 3, 2]), "❌ [5, 4, 3, 2]");
}

testRangeWithStep();