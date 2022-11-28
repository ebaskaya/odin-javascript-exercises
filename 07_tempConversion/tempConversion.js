const ftoc = function(fTemp) {
  cTemp = (fTemp - 32)/1.8;
  cTemp = parseFloat(cTemp.toFixed(1));
  return cTemp;
};

const ctof = function(cTemp) {
  fTemp = (cTemp * 1.8) + 32;
  fTemp = parseFloat(fTemp.toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
