const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let sums = 0;
	for(let i = 0; i < nums.length; i++){
		sums += nums[i];
	}
	return sums;
};

const multiply = function(nums) {
	let prod = 1;
	for(let i = 0; i < nums.length; i++){
		prod *= nums[i];
	}
	return prod;
};

const power = function(num, power) {
	let prod = 1;
	for(let i = 0; i < power; i++){
		prod *= num;
	}
	return prod;
};

const factorial = function(n) {
	let prod = 1;
	for(let i = 1; i <= n; i++){
		prod *= i;
	}
	return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
