const ex5_first_number = document.getElementById('ex5_first_number');
const ex5_second_number = document.getElementById('ex5_second_number');
const ex5_third_number = document.getElementById('ex5_third_number');

const ex5_btn_calculate = document.getElementById('ex5_btn_calculate');

const ex5_list_numbers = document.getElementById('ex5_list_numbers');
const ex5_number_larger = document.getElementById('ex5_number_larger');
const ex5_number_short = document.getElementById('ex5_number_short');

ex5_btn_calculate.addEventListener('click',()=>{
    const num1 = parseInt(ex5_first_number.value)
    const num2 = parseInt(ex5_second_number.value)
    const num3 = parseInt(ex5_third_number.value)
    console.log(num1)
    console.log(num2)
    console.log(num3)
    const mi_list = [num1,num2,num3]

    ex5_list_numbers.innerHTML=`List: <b class="text-primary h5"> [${mi_list}] </b>`
    ex5_number_larger.innerHTML=`Num Large : <b class="text-primary">${Math.max(...mi_list)}</b>`
    ex5_number_short.innerHTML=` Num Short: <b class="text-primary">${Math.min(...mi_list)}</b>`
})