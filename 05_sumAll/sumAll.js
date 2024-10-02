const sumAll = function(start, end) {
    let sum = 0;
    let max = Math.max(start, end);
    let min = Math.min(start, end);
    
    if ((start * end) > 0 && Number.isInteger(start + end)) {
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
