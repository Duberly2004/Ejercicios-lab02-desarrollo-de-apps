// EXSERCICE 3

const operation1 = document.getElementById('operation1');
const operation2 = document.getElementById('operation2');
const btnCalculate3 = document.getElementById('btn_calculate');
const ex3_first_number = document.getElementById('ex3_first_number');
const ex3_second_number = document.getElementById('ex3_second_number');
btnCalculate3.addEventListener('click', () =>{

    const x = parseInt(ex3_first_number.value) 
    const y = parseInt(ex3_second_number.value)

    if (x>y){
        operation1.innerHTML=`<b>Adition: </b> ${x+y}`
        operation2.innerHTML=`<b>Diference: </b> ${x-y}` 
    }else{
        operation1.innerHTML=`<b>Product: </b> ${y*x}`
        operation2.innerHTML=`<b>Division: </b> ${y/x}`
    }
})
