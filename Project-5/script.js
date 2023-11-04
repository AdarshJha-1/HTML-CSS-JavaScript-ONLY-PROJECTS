const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results') 

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight`;
    }else{
        const bmiVal = (weight / ((height*height)/10000)).toFixed(2)

        if (bmiVal < 18.6) {
            results.innerHTML = `<span>You are Under Weight BMI: ${bmiVal}</span>`
        } else if(bmiVal > 18.6 && bmiVal < 24.9) {
            results.innerHTML = `<span>You are in normal range BMI: ${bmiVal}</span>`
        }
        else{
            results.innerHTML = `<span>You are Over-Weight BMI: ${bmiVal}</span>`
        }
    }

});