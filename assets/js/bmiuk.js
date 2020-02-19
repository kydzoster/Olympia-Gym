let formA = document.querySelector('#bmiuk');

formA.addEventListener('submit', function(a){
    a.preventDefault();
    
    let inches = parseInt(document.querySelector('#inches').value);
    let pounds = parseInt(document.querySelector('#pounds').value);
    let resultsA = document.querySelector('#resultsA');
    
    if((inches === '') || (inches < 0) || (isNaN(inches))){
        resultsA.innerHTML = "Please provide a valid inches";
        
    } else if (pounds === '' || pounds < 0 || isNaN(pounds)){
        resultsA.innerHTML = "Please provide a valid pounds";
    } else {
    //calculate BMI
    let bmiuk = (703*(pounds / (inches*inches))).toFixed(2);
    //display the results
    resultsA.innerHTML = `<span>${bmiuk}</span>`
    }
});