// Bubble Sort Implementation in JavaScript
function sort(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++) {
        let swiped;
        for (let j = 0; j < arrLength - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swiped = true;
            }
        }
        if (!swiped) break;
    }
    return arr;
}
let array = [4, 2, 1, 5, 7, 80, 3]
let sortedArray = sort(array);
console.log(sortedArray); // sorted array output  [1, 2,  3, 4,5, 7, 80]