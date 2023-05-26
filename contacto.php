<?php
if(isset($_POST['submit']))
{
    $para = "179859@upslp.edu.mx";
    $asunto = "Sugerencias";
    $contenido = $_POST['contenido'];
    $headers = "MIKE-Version: 1.0\r\n";
    $headers = "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = "Mensaje: $contenido\n";

    $bool = mail($para,$asunto,$cuerpo,$headers);
}

else{
    echo "Algo ocurrio mal...";
}