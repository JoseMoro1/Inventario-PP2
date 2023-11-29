var listaProductos = [];
var objProducto = {
    id: '',
    nombre: '',
    puesto: ''
}
var editando = false;

const btnAgregarInput = document.querySelector('#btnAgregar');
const btnCancelarInput = document.querySelector('#btnCancelar');

const formulario = document.querySelector('#formulario');

btnAgregarInput.addEventListener('click', validarFormulario);
btnCancelarInput.addEventListener('click', cancelarEdicion);

function validarFormulario(e) {
    e.preventDefault();

    const nombreInput = document.querySelector('#nombre');
    const puestoInput = document.querySelector('#puesto');

    if(nombreInput.value === '' || puestoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarProducto(nombreInput.value, puestoInput.value);
    } else {
        objProducto.id = generateRandomId(5);
        objProducto.nombre = nombreInput.value;
        objProducto.puesto = puestoInput.value;
        agregarProducto(objProducto);
    }
}

function generateRandomId(length) {
    const characters = '0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
    }
    return randomId;
}

function agregarProducto(objProducto) {

    listaProductos.push({...objProducto});
    mostrarProductos();
    formulario.reset();
    limpiarProducto();
}
function limpiarProducto() {
    objProducto = {
        id: '',
        nombre: '',
        puesto: ''
    }
    const nombreInput = document.querySelector('#nombre');
    const puestoInput = document.querySelector('#puesto');
    nombreInput.value = '';
    puestoInput.value = '';
}

function mostrarProductos() {
    limpiarHTML();

    const divProductos = document.querySelector('.div-productos');
    
    listaProductos.forEach(producto => {
        const {id, nombre, puesto} = producto;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);
    });
}

function cargarProducto(producto) {
    const nombreInput = document.querySelector('#nombre');
    const puestoInput = document.querySelector('#puesto');
    const {id, nombre, puesto} = producto;

    nombreInput.value = nombre;
    puestoInput.value = puesto;
    
    objProducto.id = id;

    formulario.querySelector('#btnAgregar').textContent = 'Actualizar';
    editando = true
}

function editarProducto(nombre,puesto) {

    objProducto.nombre = nombre;
    objProducto.puesto = puesto;
    listaProductos.map(producto => {

        if(producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre = objProducto.nombre;
            producto.puesto = objProducto.puesto;
        }

    });

    limpiarHTML();
    mostrarProductos();
    formulario.reset();

    formulario.querySelector('#btnAgregar').textContent = 'Agregar';
    
    editando = false;
}

function cancelarEdicion() {
limpiarProducto();
editando = false;
formulario.querySelector('#btnAgregar').textContent = 'Agregar';
}

function eliminarProducto(id) {

    listaProductos = listaProductos.filter(producto => producto.id !== id);

    limpiarHTML();
    mostrarProductos();
}

function limpiarHTML() {
    const divProductos = document.querySelector('.div-productos');
    while(divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
}