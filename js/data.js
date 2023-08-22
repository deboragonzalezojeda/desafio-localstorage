let data = document.getElementById('data');
let datosGuardados = JSON.parse(localStorage.datos);

document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < datosGuardados.length; i++) {
        data.innerHTML += `
        <br> ${datosGuardados[i]}
    `;
    }
});