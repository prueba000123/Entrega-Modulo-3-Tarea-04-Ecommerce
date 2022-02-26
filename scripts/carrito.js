//se valida que tenga al menos 1 elemnto porque se cuenta la categoria que selecciona, es decir que no ha ingresao productos

if (localStorage.length <= 1) {
    alert('Agregue Productos al Carrito')
    window.location.href = "../index.html"
}
else {

// se trae la informacion del localStorage
    let traerId = localStorage.getItem('idCategoria');
    mostrarProductosCarro(traerId)

    // se guarda y convierte a objeto los productos desde el localStorage
    let productosCarrito = JSON.parse(localStorage.getItem('Productos'));



    //mostrar detalles de productos en el carro
    function mostrarProductosCarro() {

        let bodyTabla = document.getElementById('bodyTabla');
        let productosCarrito = JSON.parse(localStorage.getItem('Productos'));

        let subtotal = 0;

        productosCarrito.forEach(element => {

            if (element.cantidad > 1) {

                subtotal = (Number((element.precio).slice(1)).toFixed(3)) * Number(element.cantidad);

                bodyTabla.innerHTML += `
                <tr>
                    <td id="nombreProducto">${element.nombre}</td>
                    <td id="cantidadProducto">${element.cantidad}</td>
                    <td id="precioProducto">${element.precio}</td>
                    <td id="totalProducto">$${(subtotal).toFixed(3)}</td>
                </tr>
            `

                footerTotalTabla.innerHTML = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="footerTotal" id ="footerTotal"></td>
                    </tr>
            `

            }
            else {
                bodyTabla.innerHTML += `
                     <tr>
                         <td id="nombreProducto">${element.nombre}</td>
                         <td id="cantidadProducto">${element.cantidad}</td>
                         <td id="precioProducto">${element.precio}</td>
                         <td id="totalProducto">${element.precio}</td>
                     </tr>

                 `
                footerTotalTabla.innerHTML = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="footerTotal" id ="footerTotal"></td>
                    </tr>
            `
            }

        });

    }


    let subTotalPrecios = 0;
    let total = 0;

    productosCarrito.forEach(element => {


        if (element.cantidad > 1) {

            subTotalPrecios = (Number((element.precio).slice(1)) * Number(element.cantidad));
            total = total + subTotalPrecios;


        }
        else {
            subTotalPrecios = (Number((element.precio).slice(1)))
            total = total + subTotalPrecios;

        }

    })
    let conteFooterTotal = document.getElementById('footerTotal');
    conteFooterTotal.innerHTML = `$ ${total.toFixed(3)}`;


}
