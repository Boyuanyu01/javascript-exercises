const palindromes = function (string) {
	const replaced = string.replace(/[^a-z]/gi, '').toLowerCase();
	let n = replaced.length;
	for(let i = 0; i < n / 2; i++){
		if(replaced.charAt(i) != replaced.charAt(n - i - 1)){
			return false;
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
