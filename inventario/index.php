<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventario</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <form method="POST" name="formulario" action="registrar.php">
        <h2>MAK Tools</h2>
        <p>Registrarse</p>

        <div class="input-wrapper">
            <input id="name" type="text" name="name" placeholder="Nombre">
        </div>

        <div class="input-wrapper">
            <input id="email" type="email" name="email" placeholder="Email">
        </div>

        <!-- <div class="input-wrapper">
            <input type="texto" name="direction" placeholder="Dirección">
            <img class="input-icon" src="images/direction.svg" alt="">
        </div> -->

        <!-- <div class="input-wrapper">
            <input type="tel" name="phone" placeholder="Teléfono">
            <img class="input-icon" src="images/phone.svg" alt="">
        </div> -->

        <div class="input-wrapper">
            <input id="password" type="password" name="password" placeholder="Contraseña">
        </div>

        <input class="btn" type="submit" name="register" value="Enviar">
    </form>
</body>
</html>