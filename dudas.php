<?php
if(isset($_POST['submit']))
{
    $para = "179859@upslp.edu.mx";
    $asunto = "Enviando información";
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $headers = "MIKE-Version: 1.0\r\n";
    $headers = "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = "Enviado por: $nombre\n E-mail: $correo\n Mensaje: $mensaje\n";

    $bool = mail($para,$asunto,$cuerpo,$headers);
}

else{
    echo "Algo ocurrio mal...";
}