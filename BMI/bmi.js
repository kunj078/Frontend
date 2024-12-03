const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let bmi ;
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI : ${bmi}</span>`;
    }

    const weightGuide = document.querySelector('#weight-guide')
    if(bmi < 18.6){
        weightGuide.innerHTML = `<span>Under Weight</span>`
    } else if (bmi >= 18.6 && bmi < 24.9){
        weightGuide.innerHTML = `<span>Noramal Range</span>`
    } else {
        weightGuide.innerHTML = `<span>Over weight</span>`
    }
});