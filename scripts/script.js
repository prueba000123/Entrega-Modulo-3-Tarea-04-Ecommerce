document.addEventListener('DOMContentLoaded', () => {

    let numero = document.getElementById('numero');

    if (localStorage.length > 1) {

        let traeNum = JSON.parse(localStorage.getItem('Productos'));
        let cantidad = 0;

        traeNum.forEach(element => {
            cantidad = Number(cantidad) + Number(element.cantidad);
        })
        console.log(cantidad);


        numero.textContent = cantidad;

    }
    else {
        numero.textContent = 0;
    }
})


let catMujer = document.getElementById('mujer');
let catHombre = document.getElementById('hombre');


catMujer.addEventListener('click', (e) => {

    let cateMujer = (e.target.id)
    localStorage.setItem('idCategoria', cateMujer);


});

catHombre.addEventListener('click', (e) => {

    let cateHombre = (e.target.id)
    localStorage.setItem('idCategoria', cateHombre);



});

