const repeatString = function(str, repeat) {
    if(repeat < 0) return "ERROR";
    let repeated = "";
    for(let i = 0; i < repeat; i++){
        repeated += str;
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
