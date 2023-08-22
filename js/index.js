let btn = document.getElementById('buttonText');
let input = document.getElementById('inputText');
let datos;

document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.datos) {
        datos = JSON.parse(localStorage.datos);
        console.log(datos);
    } else {
        datos = [];
        console.log(datos);
    }
});

btn.addEventListener('click', function() {
    datos.push(input.value);
    localStorage.datos = JSON.stringify(datos);
});