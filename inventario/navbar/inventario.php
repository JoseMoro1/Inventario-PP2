<?php

include("conexionnavbar.php");

if (isset($_POST['inventory'])) {
    if(
        strlen($_POST['categories']) >= 1 &&
        strlen($_POST['products']) >= 1 &&
        strlen($_POST['amount']) >= 1
        ) {
            $name = trim($_POST['categories']);
            $email = trim($_POST['products']);
            $password = trim($_POST['amount']);
            $fecha = date("Y/m/d");
            $consulta = "INSERT INTO datos(categorias, productos, cantidad, fecha)
                VALUES('$categories', '$products', '$amount', '$fecha')";
            $resultado = mysqli_query($conex, $consulta);
            if ($resultado) {
                ?>
                    <h3 class="success" >Tu Carga fue Completada</h3>
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