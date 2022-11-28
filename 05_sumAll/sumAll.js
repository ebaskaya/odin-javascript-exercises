const sumAll = function(startInt, endInt) {
  if(startInt < 0 || endInt < 0 || !Number.isInteger(startInt) 
  || !Number.isInteger(endInt))
    return "ERROR";
  if(startInt > endInt){
    let temp = endInt;
    endInt = startInt;
    startInt = temp;
  }
    sum = 0;
  for(let i = startInt; i <= endInt; i++){
    sum += i;

  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
