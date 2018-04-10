function shallow(num) {
	let returner = 0;
	for (let i = 0; i < num; i++) {
		returner = returner + num;
	}
	return returner;
}

function nested(num) {
	let returner = 0;
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			returner = returner + num;
		}
	}
	return returner;
}

function deeplyNested(num) { // exponential (^ input)
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


function overlyNested(num) {
	let returner = 0;
	for (let l = 0; l < num; l++) {
		for (let k = 0; k < num; k++) {
			for (let j = 0; j < num; j++) {
				for (let i = 0; i < num; i++) {
					returner = returner + num;
				}
			}
		}
	}
	return returner;
}