var formA = document.querySelector('#bmiuk');

formA.addEventListener('submit', function(a) {
	a.preventDefault();

	var inches = parseInt(document.querySelector('#inches').value);
	var pounds = parseInt(document.querySelector('#pounds').value);
	var resultsA = document.querySelector('#resultsA');
	var bmiukRed = document.querySelector('#bmiukRed');
	var bmiukGreen = document.querySelector('#bmiukGreen');
	var bmiukOrange = document.querySelector('#bmiukOrange');

	if ((inches === '') || (inches < 0) || (isNaN(inches))) {
		resultsA.innerHTML = "Please provide a valid inches";

	} else if (pounds === '' || pounds < 0 || isNaN(pounds)) {
		resultsA.innerHTML = "Please provide a valid pounds";
	} else {
		//calculate BMI
		var bmiuk = (703 * (pounds / (inches * inches))).toFixed(2);
		//display the results
		resultsA.innerHTML = `<span>${bmiuk}</span>`;
		if (bmiuk < 18.6) {
    resultsA.style.color = 'red', bmiukRed.style.color = 'red';
  } else if (bmiuk <= 24.9) {
    resultsA.style.color = 'green', bmiukGreen.style.color = 'green';
  } else {
    resultsA.style.color = 'orange', bmiukOrange.style.color = 'orange';
  }
	}
});