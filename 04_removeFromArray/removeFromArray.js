const removeFromArray = function(array) {
	for(argument of arguments){
		const found = array.find(element => element === argument);
		array = array.filter(element => element != found);
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
