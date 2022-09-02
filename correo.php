<?php

$destinatario="info@windnetpr.com";
$nameUser =$_POST['usuario'];
$apellido = $_POST['last-name'];
$email =$_POST['email'];
$phoneNumber =$_POST['phone-number'];
$message =$_POST['message'];
$asunto =$_POST['asunto'];
$text="Nombre: " .$nameUser ."\n" ."Apellido: " .$apellido  ."\n" ."Numero de telefono: " .$phoneNumber ."\n" ."Mensaje: " .$message;
$header= "From: windnetpr.com" ."\r\n";
$header.="Reply-To:" . $email ."\r\n";
$header.="X-Mailer: PHP/" . phpversion();
$mail = mail($destinatario,$asunto,$text,$header );

echo json_encode('Set');


