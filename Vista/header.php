<?php
	session_start();
	if(!isset($_SESSION['id'])){
		header("Location:../");
		exit(); 
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Plus Security</title>
	<link rel="shortcut icon" href="../Recursos/img/logo.png">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400">  <!-- Google web font "Open Sans" -->
	<link rel="stylesheet" href="../Recursos/css/fontawesome-all.min.css">
	<link rel="stylesheet" href="../Recursos/css/bootstrap.min.css">
	<link rel="stylesheet" href="../Recursos/css/tooplate-style.css">

	<script>
		var renderPage = true;

	if(navigator.userAgent.indexOf('MSIE')!==-1
		|| navigator.appVersion.indexOf('Trident/') > 0){
   		/* Microsoft Internet Explorer detected in. */
   		alert("Please view this in a modern browser such as Chrome or Microsoft Edge.");
   		renderPage = false;
	}
	</script>
</head>

<body>
	<div style="text-align: right;position: absolute;margin-top: 52px;"><form action="../Controlador/usuario.controlador.php" method="POST"><input type="hidden" name="operacion" value="salir"><button type="submit" style="position: fixed;right: 2px;padding: 10px 15px; background: #000000c4; border: 1px solid; color: #e45339; cursor: pointer; margin-top: 4px; margin-left: 4px; border-radius: 5px; width: 60px; height: 50px; z-index: 1001;"><i class="fas fa-power-off"></i></button></form></div>
	<div style="text-align: right;position: absolute;margin-top: 104px;"><button id="configuracion" onclick="alert('aaa')" style="position: fixed;right: 2px;padding: 10px 15px; background: #000000c4; border: 1px solid; color: #868180; cursor: pointer; margin-top: 4px; margin-left: 4px; border-radius: 5px; width: 60px; height: 50px; z-index: 1001;"><i class="fas fa-cog"></i></button></div>
