const reverseString = function(str) {
    let toReverse = str.split('');
    const reversed = [];

    for(let i = 0; i < toReverse.length; i++){
        reversed.push(toReverse[toReverse.length-i-1]);
    }
    return reversed.join('');
};



// Do not edit below this line
module.exports = reverseString;
