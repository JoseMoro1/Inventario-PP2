<?php

require './conexionproductos.php';
$db = new database();
$con = $db->conectar();
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <title>PRODUCTOS</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../productos/styleproductos.css">
</head>
<body>
    <div class="div-titulo">
        <h1>PRODUCTOS MAK TOOLS</h1>
    </div>
    
    <div class="contenedor">
        <div class="div-formulario">
            <h2>Planilla de Stock</h2>

            <form action="#" id="formulario">
                <input type="text" id="nombre" placeholder="Nombre del Producto">
                <input type="text" id="puesto" placeholder="Ingresar Cantidad">
                <button onclick="e=>validarFormulario(e)" id="btnAgregar">Agregar</button>
                <button id="btnCancelar" onclick="e=>cancelarEdicion(e)">Cancelar</button>
            </form>
        </div>

        <div class="div-listado">
            <h2>Listado Productos</h2>
            <div class="div-productos"> 
            </div>
        </div>
    </div>
    <script src="./productos.js"></script>
</body>
</html>