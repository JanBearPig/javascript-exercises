const reverseString = function(phrase) {
    let word = "";
    for (let i = phrase.length - 1; i >= 0; i--) {
        word += phrase[i];
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
