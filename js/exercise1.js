// EXERCISE 1

// ----Login-----
const user = document.getElementById('user');
const password = document.getElementById('password');
const buttonSingin = document.getElementById('button_singin');
const datosUsuario = document.getElementById('datos_usuario');
let h6Welcome = document.getElementById('h6Welcome');
let pUser = document.getElementById('pUser');
let pPassword = document.getElementById('pPassword');


const singIn = ()=>{
    if (!h6Welcome){
        h6Welcome = document.createElement('h6');
        datosUsuario.appendChild(h6Welcome);
    }

    if (!pUser){
        pUser = document.createElement('p');
        datosUsuario.appendChild(pUser);
    }

    if (!pPassword) {
        pPassword = document.createElement('p');
        datosUsuario.appendChild(pPassword);
    }
    
    h6Welcome.setAttribute('id','h6Welcome');
    pUser.setAttribute('id','pUser');
    pPassword.setAttribute('id','pPassword');

    h6Welcome.innerHTML=`Welcome <span class="text-primary">${user.value}</span>`
    pUser.innerHTML=`<b class="text-success"> User Name: </b>${user.value}`;
    pPassword.innerHTML=`<b class="text-success"> Password:</b> ${password.value}`;

}
buttonSingin.addEventListener('click',()=>{
    singIn()
})
