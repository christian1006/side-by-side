function greetings(time) {
	var response = "";
	if ((1 <= time) && (time <= 1200)) {
		response = "good morning";
	} else if ((1201 <= time) && (time <= 1800)) {
		response = "good afternoon";
	} else {
		response = "good evening"
	}
	return response;
}

greetings(1850)
greetings(50)

