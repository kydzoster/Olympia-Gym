var formA = document.querySelector("#bmiuk");

formA.addEventListener("submit", function (a) {
	a.preventDefault();

	var inches = parseInt(document.querySelector("#inches").value);
	var pounds = parseInt(document.querySelector("#pounds").value);
	var resultsA = document.querySelector("#resultsA");
	var bmiukRed = document.querySelector("#bmiukRed");
	var bmiukGreen = document.querySelector("#bmiukGreen");
	var bmiukOrange = document.querySelector("#bmiukOrange");

	resultsA.style.color = "black";
	bmiukRed.style.color = "black";
	bmiukGreen.style.color = "black";
	bmiukOrange.style.color = "black";

	if (inches === "" || inches < 0 || isNaN(inches)) {
		resultsA.innerHTML = "";
	} else if (pounds === "" || pounds < 0 || isNaN(pounds)) {
		resultsA.innerHTML = "";
	} else {
		//calculate BMI
		var bmiuk = (703 * (pounds / (inches * inches))).toFixed(2);
		//display the results
		resultsA.innerHTML = `<span>${bmiuk}</span>`;
		if (bmiuk < 18.6) {
			(resultsA.style.color = "red"), (bmiukRed.style.color = "red");
		} else if (bmiuk <= 24.9) {
			(resultsA.style.color = "green"), (bmiukGreen.style.color = "green");
		} else {
			(resultsA.style.color = "orange"), (bmiukOrange.style.color = "orange");
		}
	}
	document.querySelector("#inches").value = "";
	document.querySelector("#pounds").value = "";
});