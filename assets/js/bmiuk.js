var formA = document.querySelector('#bmiuk');

formA.addEventListener('submit', function(a) {
	a.preventDefault();

	var inches = parseInt(document.querySelector('#inches').value);
	var pounds = parseInt(document.querySelector('#pounds').value);
	var resultsA = document.querySelector('#resultsA');

	if ((inches === '') || (inches < 0) || (isNaN(inches))) {
		resultsA.innerHTML = "Please provide a valid inches";

	} else if (pounds === '' || pounds < 0 || isNaN(pounds)) {
		resultsA.innerHTML = "Please provide a valid pounds";
	} else {
		//calculate BMI
		var bmiuk = (703 * (pounds / (inches * inches))).toFixed(2);
		//display the results
		resultsA.innerHTML = `<span>${bmiuk}</span>`;
	}
});