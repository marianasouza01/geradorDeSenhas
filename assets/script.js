let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let tooltip = document.querySelector("#tooltip");
var especiale = document.getElementById("especiale");

let charset = "";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function especial(){
    if (especiale.checked == true){
         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#&*$";
         console.log(charset);         
    } else {
         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
         console.log(charset);
        }
}


function generetePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
}


//quando clicar em password mudar o 'clique para copiar a senha' para 'senha copiada' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
