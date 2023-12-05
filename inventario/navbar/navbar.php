<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barra de navegacion</title>
    <link rel="stylesheet" href="../navbar/stylenavbar.css">
</head>
<body>
    <nav>
        <input type="checkbox" id="toogle">
        <!-- <label for="tooggle"><img src="../images/logo mak tools.jpg" alt="menu"></label> -->
        <div class="logo">Inventario</div>
        <ul class="list">
            <li><a href="./navbar.php">Inicio</a></li>
            <li><a href="../productos/productos.php">Productos</a></li>
            <li><a href="#">Categorias</a>
            <ul class="menu-vertical">
                <li><a href="#">Matafuegos</a></li>
                <li><a href="#">Botiquines</a></li>
                <li><a href="#">Seguridad Vehicular</a></li>
                <li><a href="#">Elementos de seguridad industrial</a></li>
                <li><a href="#">Herramientas neumaticas</a></li>
                <li><a href="#">Accesorios para gomeria y taller</a></li>
                <li><a href="#">Productos para lubricentros</a></li>
                <li><a href="#">Carritos porta Herramientas</a></li>
            </ul>
            </li>
            <li><a href="../login/login.php">Salir</a></li>
        </ul>

        <label for="toogle" class="icon-bars">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        <!-- <a href=""><img src="../images/logo mak tools.jpg" alt=""></a> -->
    </nav>
</body>
</html>