/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 

For this exercise, 
write two functions, reverseArray and reverseArrayInPlace. 

The first, reverseArray, 
should take an array as its argument 
and produce a new array that has the same elements in the inverse order. 

The second, reverseArrayInPlace, should do what the reverse method does: 
modify the array given as its argument by reversing its elements. 

Neither may use the standard reverse method.
 */

function reverseArray(array) {
    const output = [];
    for (let index = array.length - 1; index >= 0; index--) {
        output.push(array[index]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let index = 0; index < array.length / 2; index++) {
        const element = array[index];
        const other = array[(array.length - 1) - index];
        array[index] = other;
        array[(array.length - 1) - index] = element;
    }
    return array;
}

function testReverseArray() {
    const actual = reverseArray([1, 2]);
    console.assert(actual[0] === 2, "❌ 2");
    console.assert(actual[1] === 1, "❌ 1");
}

testReverseArray();

function testReverseArrayInPlace() {
    const actual = reverseArrayInPlace([1, 2, 3, 4, 5]);
    console.assert(actual[0] === 5, "❌ 5");
    console.assert(actual[1] === 4, "❌ 4");
    console.assert(actual[2] === 3, "❌ 3");
    console.assert(actual[3] === 2, "❌ 2");
    console.assert(actual[4] === 1, "❌ 1");
}

testReverseArrayInPlace();