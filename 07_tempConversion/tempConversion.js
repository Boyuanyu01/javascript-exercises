const ftoc = function(temp) {
  if((temp - 32) % 9 === 0){
    return (temp - 32) * 5 / 9;
  }
  return Math.round((temp - 32.0) * 5 / 9 * 10) / 10;
};

const ctof = function(temp) {
  if(temp % 5 === 0){
    return temp * 9 / 5 + 32;
  }
  return Math.round((temp * 9 / 5 + 32.0) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
