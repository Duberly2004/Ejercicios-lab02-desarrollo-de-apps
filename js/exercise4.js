// EXERCICE 4
const ex4_first_note = document.getElementById('ex4_first_note');
const ex4_second_note = document.getElementById('ex4_second_note');
const ex4_third_note = document.getElementById('ex4_third_note');
const ex4_btn_calculate = document.getElementById('ex4_btn_calculate');
const ex4_averange = document.getElementById('ex4_averange');
const ex4_message = document.getElementById('ex4_message');

ex4_btn_calculate.addEventListener('click',()=>{
    const x = parseFloat(ex4_first_note.value);
    const y = parseFloat(ex4_second_note.value);
    const z = parseFloat(ex4_third_note.value); 
    const averange = ((x+y+z)/3)
    ex4_averange.innerHTML=`<b class="text-dark">Promedio</b> : ${averange.toFixed(2)}`
    console.log(averange)
    console.log(ex4_averange)
    if (averange>=4){
        ex4_message.innerHTML="Regular"
    }else{
        ex4_message.classList="text-danger h5"
        ex4_message.innerHTML="Reprobaste :c"
    }
})