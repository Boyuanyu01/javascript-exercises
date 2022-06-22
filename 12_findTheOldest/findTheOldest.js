const findTheOldest = function(people) {
	const ordered = people.sort(function(a, b) {
		let a_age;
		let b_age;
		if(!('yearOfDeath' in a)){
			a_age = new Date().getFullYear() - a.yearOfBirth;
		}
		else{
			a_age = a.yearOfDeath - a.yearOfBirth;
		}
		if(!('yearOfDeath' in b)){
                        b_age = new Date().getFullYear() - b.yearOfBirth;
                }
                else{
                        b_age = b.yearOfDeath - b.yearOfBirth;
                }
		if(a_age > b_age){
			return -1;
		}
		if(a_age < b_age){
			return 1;
		}
		return 0;
	})
	return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
