const salida = document.querySelector(".salida");
const resultado = document.querySelector(".resultado");
const keys = document.querySelectorAll("button");


keys.forEach(key =>{

    key.addEventListener("click",calcular)
});

function calcular(){
    let botonText=this.innerText;
    if(botonText==="C"){
        salida.innerText = "";
        resultado.innerText = "0";
        resultado.style.animation = "";
        salida.style.animation = "";
        return;
    }
    if(botonText==="←"){
        salida.textContent = salida.textContent.substring(0,salida.textContent.length-1);
        return;
    }
    if(botonText==="="){
        resultado.innerText = eval(salida.innerText);
        resultado.style.animation = "aumentar 0.5s ease-in-out";
        salida.style.animation = "disminuir 0.5s ease-in-out";
        resultado.style.animationFillMode = "forwards";
        salida.style.animationFillMode = "forwards";
    }
    else{
        salida.textContent+= botonText;
        return;
    }
    
}
//script de los temas//
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculadora = document.querySelector(".calculadora.dark");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculadora.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};




