var formB = document.querySelector('#bmi');

formB.addEventListener('submit', function(b) {
	b.preventDefault();

	var height = parseInt(document.querySelector('#height').value);
	var weight = parseInt(document.querySelector('#weight').value);
	var resultsB = document.querySelector('#resultsB');
	var bmiRed = document.querySelector('#bmiRed');
	var bmiGreen = document.querySelector('#bmiGreen');
	var bmiOrange = document.querySelector('#bmiOrange');

	if ((height === '') || (height < 0) || (isNaN(height))) {
		resultsB.innerHTML = "Please provide a valid height";

	} else if (weight === '' || weight < 0 || isNaN(weight)) {
		resultsB.innerHTML = "Please provide a valid weight";
	} else {
		//calculate BMI
		var bmi = (weight / ((height * height) / 10000)).toFixed(2);
		//display the results
		resultsB.innerHTML = `<span>${bmi}</span>`;
		if (bmi < 18.6) {
	resultsB.style.color = 'red', bmiRed.style.color = 'red';
  } else if (bmi <= 24.9) {
    resultsB.style.color = 'green', bmiGreen.style.color = 'green';
  } else {
    resultsB.style.color = 'orange', bmiOrange.style.color = 'orange';
  }
  	}
});