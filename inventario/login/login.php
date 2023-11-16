<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css"> 
</head>
<body>
    <form method="POST" name="login" action="./ingresar.php">
        <h2>Bienvenido</h2>
        <p>Ingresar</p>

        <!-- <div class="input-wrapper">
            <input id="name" type="text" name="name" placeholder="Nombre">
            <img class="input-icon" src="images/name.svg" alt="">
        </div> -->

        <div class="input-wrapper">
            <input id="email" type="email" name="email" placeholder="Email">
            <img class="input-icon" src="images/email.svg" alt="">
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
            <img class="input-icon" src="images/password.svg" alt="">
        </div>

        <input class="btn" type="submit" name="ingresar" value="Enviar">
    </form>
</body>
</html>