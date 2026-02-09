// find the frequency of each character in a string

function frequency(str) {
    const freq = {};
    for (let char of str) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}
function frequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(frequency("hello world"));