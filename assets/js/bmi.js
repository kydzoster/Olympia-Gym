let formB = document.querySelector('#bmi');

formB.addEventListener('submit', function(b){
    b.preventDefault();
    
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let resultsB = document.querySelector('#resultsB');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        resultsB.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        resultsB.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    let bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    resultsB.innerHTML = `<span>${bmi}</span>`
    }
});
