<?php
include_once("../Entidad/usuario.entidad.php");
include_once("../Modelo/usuario.modelo.php");
$operacion= $_POST['operacion'];
$UsuarioE = new \entidadUsuario\Usuario();
switch ($operacion) {
    case 'traer_preguntas':
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->traerPreguntas();
        break;
    case 'registrar':
        $UsuarioE->setNombre($_POST['nombre']);
        $UsuarioE->setCelular($_POST['celular']);
        $UsuarioE->setCorreo($_POST['correo']);
        $UsuarioE->setPassword($_POST['password']);
        $UsuarioE->setPreguntas([$_POST['pregunta1'], $_POST['pregunta2'], $_POST['pregunta3'], $_POST['pregunta4'], $_POST['pregunta5']]);
        $UsuarioE->setRespuestas([$_POST['respuesta1'], $_POST['respuesta2'], $_POST['respuesta3'], $_POST['respuesta4'], $_POST['respuesta5']]);
        $UsuarioE->setTipo($_POST['tipo']);
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->registrar();
        break;
    case 'validacion1':
        $UsuarioE->setCorreo($_POST['correo']);
        $UsuarioE->setPassword($_POST['password']);
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->validacion1();
        break;
    case 'validacion2':
        $UsuarioE->setCorreo($_POST['correo']);
        $UsuarioE->setPassword($_POST['password']);
        $UsuarioE->setPreguntas([$_POST['pregunta1'], $_POST['pregunta2'], $_POST['pregunta3']]);
        $UsuarioE->setRespuestas([$_POST['respuesta1'], $_POST['respuesta2'], $_POST['respuesta3']]);
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->validacion2();
        break;
    case 'salir':
        session_start();
        session_destroy();
        header("Location:../");
        exit(); 
        break;
    case 'traerPregunta':
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->traerPregunta();
        break;
    case 'validacionPregunta':
        $UsuarioE->setPreguntas($_POST['idPregunta']);
        $UsuarioE->setRespuestas($_POST['respuesta']);
        $UsuarioM = new \modeloUsuario\Usuario($UsuarioE);
        $mensaje = $UsuarioM->validacionPregunta();
        break;
}
unset($UsuarioE);
unset($UsuarioM);

echo json_encode($mensaje);
?>