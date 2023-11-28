let listadoProductos = [];

const objProducto = {
    id: '',
    nombre: '',
    puesto: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(productInput.value === '' || puestoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarProducto();
        editando = false;
    } else {
        objProducto.id = Date.now();
        objProducto.nombre = nombreInput.value;
        objProducto.puesto = puestoInput.value;
        agregarProducto();
    }
}

function agregarProducto() {

    listaProductos.push({...objProducto});

    mostrarProductos();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objProducto.id = '';
    objProducto.nombre = '';
    objProducto.puesto = '';
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
    const {id, nombre, puesto} = producto;

    nombreInput.value = nombre;
    puestoInput.value = puesto;
    
    objProducto.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarProducto() {

    objProducto.nombre = nombreInput.value;
    objProducto.puesto = puestoInput.value;
    listadoproductos.map(producto => {

        if(producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre = objProducto.nombre;
            producto.puesto = objProducto.puesto;
        }

    });

    limpiarHTML();
    mostrarProductos();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarProducto(id) {

    listadoProductos = listadoProductos.filter(producto => producto.id !== id);

    limpiarHTML();
    mostrarProductos();
}

function limpiarHTML() {
    const divProductos = document.querySelector('.div-productos');
    while(divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
}