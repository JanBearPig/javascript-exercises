const sumAll = function(start, end) {
    let sum = 0;
    let max = Math.max(start, end);
    let min = Math.min(start, end);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
