<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$destino = "admin@bringsolutions.com.mx";
$asunto = "Mensaje de contacto de BG";

$contenido = "Nombre: $nombre \n";
$contenido .= "Apellido: $apellido \n";
$contenido .= "Correo: $correo \n";
$contenido .= "Telefono: $telefono \n";
$contenido .= "Mensaje: $mensaje";

mail ($destino, $asunto, $contenido);
header('Location:../../includes/enviado.html');
?>