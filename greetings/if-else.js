function greetings(time) {
	var response = "";
	if ((1 <= time) && (time <= 1200)) {
		response = "good morning";
	} 
	if ((1201 <= time) && (time <= 1800)) {
		response = "good afternoon";
	} 
	if ((1801 <= time) && (time < 2400)) {
		response = "good evening";
	}
	return response;
}

greetings(1850)
greetings(50)