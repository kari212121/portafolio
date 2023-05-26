<?php
if(isset($_POST['submit']))
{
    $para = "179859@upslp.edu.mx";
    $asunto = "Solicitud";
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $solicitud = $_POST['solicitud'];
    $headers = "MIKE-Version: 1.0\r\n";
    $headers = "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = "Enviado por: $nombre\n\n E-mail: $correo\n\n Mensaje: $solicitud\nn";

    $bool = mail($para,$asunto,$cuerpo,$headers);
}

else{
    echo "Algo ocurrio mal...";
}