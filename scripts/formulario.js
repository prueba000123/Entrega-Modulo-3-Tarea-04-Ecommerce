
const FORMULARIO = document.getElementById('form');

FORMULARIO.addEventListener('submit', (e) => {
    let nombre = document.getElementById('nombre').value;
        nombre = nombre.toUpperCase();
        let apellido = document.getElementById('apellido').value;
        apellido = apellido.toUpperCase();
        let telefono = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;
        let medioPago = document.getElementById('form').metodoPago.value;

    if (nombre == '' || apellido == '' || telefono == '' || direccion == '') {

        alert('Debe llenar todos los campos');

    } else {
        e.preventDefault()

        // se trae y guar en una variable la conversión a objeto de los productos desde el localStorage
        let productosCarrito = JSON.parse(localStorage.getItem('Productos'));

        fetch('http://localhost:4000/compras', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                compra: productosCarrito
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            let modalEnvio = document.getElementById('modal-bod');

            modalEnvio.innerHTML = `
    
                <div class="divModall">
                    <h5 class="h3">Estimad@ <br> <strong> ${nombre} ${apellido}</strong>,  <br><br></brbr><li>Su Pedido ha sido enviado a la direccion: <strong> ${direccion} </strong>  </li><br> <li>Será informado de cualquier novedad al teléfono: <strong> ${telefono} </strong></h5></li> <br>
                    <h6 class="h3"><li>El método de pago seleccionado es: <strong>${medioPago}</li></strong></h6> <br>
                    <h6 class="h2">Agradecemos su compra, Vuelva pronto..!</h6> 
                </div>
    
            `

            localStorage.clear();
            FORMULARIO.reset();
        }).catch(()=>{
            console.log('Error en la respuesta del servidor');
        })
    }


})



