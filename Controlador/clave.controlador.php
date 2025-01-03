<?php
include_once("../entidad/clave.entidad.php");
include_once("../modelo/clave.modelo.php");


$operacion= $_POST['operacion'];
$ClaveE = new \entidadClave\Clave();

if ($operacion == 'guardarClave') {
    $ClaveE->setAlias($_POST['alias']);
    $ClaveE->setUsuario($_POST['usuario']);
    $ClaveE->setClave($_POST['clave']);
    $ClaveE->setContrasena($_POST['contrasena']);
    $ClaveM = new \modeloClave\Clave($ClaveE);
    $mensaje = $ClaveM->guardarClave();
}
else if ($operacion == 'mostrar'){
    $ClaveE->setAlias($_POST['alias']);
    $ClaveM = new \modeloClave\Clave($ClaveE);
    $mensaje = $ClaveM->mostrar();
}
else if ($operacion == 'eliminar'){
    $idClave= $_POST['id'];
    $ClaveE->setIdClave($idClave);
    $ClaveM = new \modeloClave\Clave($ClaveE);
    $mensaje = $ClaveM->eliminarClave();
}
else if ($operacion == 'mostrarEditar'){
    $ClaveE->setIdClave($_POST['id']);
    $ClaveM = new \modeloClave\Clave($ClaveE);
    $mensaje = $ClaveM->mostrarEditar();
}
else if ($operacion == 'editar') {
    $ClaveE->setIdClave($_POST['id']);
    $ClaveE->setAlias($_POST['alias']);
    $ClaveE->setUsuario($_POST['usuario']);
    $ClaveE->setClave($_POST['clave']);
    $ClaveE->setContrasena($_POST['contrasena']);
    $ClaveM = new \modeloClave\Clave($ClaveE);
    $mensaje = $ClaveM->editar();
}

unset($ClaveE);
unset($ClaveM);

echo json_encode($mensaje);
?>