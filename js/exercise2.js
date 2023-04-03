// EXSERCISE 2

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('thirt');
const fourth = document.getElementById('fourth');

const buttonCalculate = document.getElementById('button_calculate');
const resultAdition = document.getElementById('result_adition');
const resultProduct = document.getElementById('result_product');
buttonCalculate.addEventListener('click', () =>{
    console.log(third.value)
    console.log(fourth.value)
    resultAdition.innerHTML = (parseInt(first.value)+parseInt(second.value))
    resultProduct.innerHTML = (parseInt(third.value)*parseInt(fourth.value))
})