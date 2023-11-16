<?php

include("../conexion.php");

if (isset($_POST['login'])) {
    if(
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['password']) >= 1
        ) {
            $email = trim($_POST['email']);
            $password = trim($_POST['password']);
            $fecha = date("Y/m/d");
            $consulta = "INSERT INTO datos(email, contraseña, fecha)
                values('$email', '$password', '$fecha')";
            $resultado = mysqli_query($conex, $consulta);
            if ($resultado) {
                ?>
                    <h3 class="success" >Tu registro se a completado</h3>
                <?php
            }   else {
                ?>
                    <h3 class="error">Ocurrio un error</h3>
                <?php
            }
        } else {
            ?>
            <h3 class="error">Llenar todos los campos</h3>
        <?php
        }
}
?>