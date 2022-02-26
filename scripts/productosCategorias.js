import { productos } from "./data.js";

if (localStorage.length == 0) {
    alert('Seleccione una Categoria')
    window.location.href = "../index.html"
}
else {

    let numero = document.getElementById('numero');
    document.addEventListener('DOMContentLoaded', () => {
    
        if (localStorage.length > 1) {
    
            let traeNum = JSON.parse(localStorage.getItem('Productos'));
            let cantiNumero = 0;
    
            traeNum.forEach(element => {
                cantiNumero = Number(cantiNumero) + Number(element.cantidad);
            })
            console.log(cantiNumero);
    
    
            numero.textContent = cantiNumero;
    
        }
        else {
            numero.textContent = 0;
        }
    })
    
    let cards = document.getElementById('contenedor');
    let produ = [];

    let traerId = localStorage.getItem('idCategoria');
    mostrarCards(traerId);


    function mostrarCards(idTraido) {
        productos.forEach(element => {

            if (idTraido == element.categoria) {

                let divQuien = document.getElementById('span')
                divQuien.innerHTML = element.para;

                let fragmento = document.createDocumentFragment();
                let divCards = document.createElement('div');
                divCards.setAttribute('class', 'cards')


                let imageProducto = document.createElement('img')
                imageProducto.setAttribute('src', element.foto);

                let nombreProducto = document.createElement('h2')
                nombreProducto.setAttribute('class', 'nombreProducto');
                nombreProducto.textContent = element.nombre;

                let precioProducto = document.createElement('h3')
                precioProducto.setAttribute('class', 'precioProducto');
                precioProducto.textContent = `$${element.precio}`;

                let boton = document.createElement('button')
                boton.setAttribute('class', 'botonComprar');
                boton.textContent = 'Comprar';
                boton.setAttribute('data-bs-toggle', 'modal');
                boton.setAttribute('data-bs-target', '#exampleModal');
                boton.setAttribute('id', `${element.id}`)



                divCards.appendChild(imageProducto);
                divCards.appendChild(nombreProducto);
                divCards.appendChild(precioProducto);
                divCards.appendChild(boton);

                fragmento.appendChild(divCards);

                cards.appendChild(fragmento);

            }
        })
    }

    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('botonComprar')) {

            productos.forEach(element => {
                if (e.target.id == element.id) {

                    let modal = document.getElementById('modal')

                    modal.innerHTML = `
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="conteBodyModal">

                        <div class="modal-body">
                            <img class="imgModal" src=${element.foto}>
                        </div>

                        <div class="modal-body" >
                            <h2 id="modalNombre">${element.nombre}</h2>
                            <h4 id="modalPrecio">$${element.precio}</h4>

                            <p>${element.descripcion}</p>

                        
                            <input type="number" id="cantidad" class="cantidad" value="1" required>
                            <button id="btnAgregarCarrito" class="botonComprar"> Agregar al Carrito</button>

                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>`

                }

            })

            let cantiProdu = document.getElementById('btnAgregarCarrito');

            cantiProdu.addEventListener('click', (e) => {

                let nombre = document.getElementById('modalNombre').textContent;
                let precio = document.getElementById('modalPrecio').textContent;
                let cantiProdu = document.getElementById('cantidad').value;

                let productos = {
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantiProdu

                }

                produ.push(productos);


                alert('Su producto fue agregado al carrito exitosamente, \n Siga comprando o dirigase al carrito de compras \n para realizar el pago..!!');
                


                localStorage.setItem('Productos', JSON.stringify(produ));


                if (numero.textContent == '') {

                    numero.innerHTML = cantiProdu;
                }
                else {
                    numero.innerHTML = Number(numero.textContent) + Number(cantiProdu);
                }




            })
        }
    })


}


