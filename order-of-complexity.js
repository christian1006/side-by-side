function exponent(num) { // exponential (ie. 2^2 -> 3^3)
	let returner = 0;
	for (let k = 0; k < num; k++) {
		for (let j = 0; j < num; j++) {
			for (let i = 0; i < num; i++) {
				returner = returner + num;
			}
		}
	}
	return returner;
}

exponent(2)
exponent(3)


function multiplication(num) { // linear (ie. 3x2 -> 3x3)
	let returner = 0; 
	for (let k = 0; k < num; k++) {
		returner = returner + num;
	}
	for (let j = 0; j < num; j++) {
		returner = returner + num;
	}
	for (let i = 0; i < num; i++) {
		returner = returner + num;
	}
	return returner;
}

addition(2)
addition(3)