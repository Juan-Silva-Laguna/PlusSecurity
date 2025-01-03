<?php
namespace modeloUsuario;
use PDO;

include_once("../Entidad/usuario.entidad.php");
include_once("../Entorno/conexion.php");
class Usuario{
      private $idUsuario;
      private $nombre;
      private $correo;
      private $celular;
      private $password;
      private $preguntas;
      private $respuestas;
      private $tipo;
      private $conexion;
      private $consulta;
      private $resultado;
      private $retorno;
      public function __construct(\entidadUsuario\Usuario $UsuarioE)
      {
         $this->conexion = new \Conexion(); 
         $this->idUsuario=$UsuarioE->getIdUsuario();
         $this->nombre=$UsuarioE->getNombre();
         $this->correo=$UsuarioE->getCorreo(); 
         $this->celular=$UsuarioE->getCelular();
         $this->password=$UsuarioE->getPassword();
         $this->preguntas=$UsuarioE->getPreguntas();
         $this->respuestas=$UsuarioE->getRespuestas();
         $this->tipo=$UsuarioE->getTipo();
      }

      public function registrar()
      {
         
         $contrasena = password_hash($this->password, PASSWORD_ARGON2I);  
         $this->consulta="INSERT INTO usuarios VALUES(null, '$this->nombre', '$this->correo', '$this->celular', '$contrasena')";
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         $this->idUsuario = $this->conexion->con->lastInsertId();
         if($this->resultado->rowCount()>=1){
            $this->retorno+=1;
         }

         if ($this->tipo == 'new') {
            for ($i=0; $i < count($this->preguntas); $i++) { 
               $pregunta = $this->preguntas[$i];
               $this->consulta="INSERT INTO preguntas VALUES(null, '$pregunta')";
               $this->resultado=$this->conexion->con->prepare($this->consulta);
               $this->resultado->execute();               
               $idPregunta = $this->conexion->con->lastInsertId();
               if($this->resultado->rowCount()>=1){
                  $this->retorno+=1;
               }
               $clave = password_hash($this->respuestas[$i], PASSWORD_ARGON2I); 
               $this->consulta="INSERT INTO respuestas VALUES(null, '$clave')";
               $this->resultado=$this->conexion->con->prepare($this->consulta);
               $this->resultado->execute();
               $idRespuesta = $this->conexion->con->lastInsertId();
               if($this->resultado->rowCount()>=1){
                  $this->retorno+=1;
               }
               $this->consulta="INSERT INTO usu_pre_res VALUES(null, $this->idUsuario, $idPregunta, $idRespuesta)";
               $this->resultado=$this->conexion->con->prepare($this->consulta);
               $this->resultado->execute();
               if($this->resultado->rowCount()>=1){
                  $this->retorno+=1;
               }
            }
            if ($this->retorno == 16) {
               return 'correcto';
            }
            else{
               return $this->retorno;
            }
         }elseif ($this->tipo == 'exist') {
            for ($i=0; $i < count($this->respuestas); $i++) {
               $clave = password_hash($this->respuestas[$i], PASSWORD_ARGON2I); 
               $this->consulta="INSERT INTO respuestas VALUES(null, '$clave')";
               $this->resultado=$this->conexion->con->prepare($this->consulta);
               $this->resultado->execute();
               $idRespuesta = $this->conexion->con->lastInsertId();
               if($this->resultado->rowCount()>=1){
                  $this->retorno+=1;
               }
               $idPregunta = $this->preguntas[$i];
               $this->consulta="INSERT INTO usu_pre_res VALUES(null, $this->idUsuario, $idPregunta, $idRespuesta)";
               $this->resultado=$this->conexion->con->prepare($this->consulta);
               $this->resultado->execute();
               if($this->resultado->rowCount()>=1){
                  $this->retorno+=1;
               }
            }
            if ($this->retorno == 11) {
               return 'correcto';
            }
            else{
               return $this->retorno;
            }
         }
         
         
         
      }

      public function traerPreguntas()
      {
         $this->consulta="SELECT * FROM preguntas WHERE id_pregunta<50 ORDER BY RAND() LIMIT 5";   
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         return $this->resultado->fetchAll(PDO::FETCH_ASSOC);
      }

      public function eliminarProducto()
      {
         $this->consulta="DELETE FROM productos WHERE idProducto='$this->idProducto'";
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         if($this->resultado->rowCount()>=1){
            $this->retorno=1;
         }
         else{
         $this->retorno=0;
         }
         return $this->retorno;
      }

      public function validacion1()
      {
         $this->consulta="SELECT * FROM usuarios WHERE correo='$this->correo'";
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         $arreglo = $this->resultado->fetchAll(PDO::FETCH_ASSOC);
         if (count($arreglo)>=1) {
            foreach ($arreglo as $key => $value) {
               if (password_verify($this->password, $value['contrasena']))  {  
                     $id = $value['id_usuario']; 
                     $this->consulta="SELECT preguntas.id_pregunta, preguntas.pregunta FROM usu_pre_res INNER JOIN usuarios ON usuarios.id_usuario = usu_pre_res.fk_id_usuario INNER JOIN preguntas ON preguntas.id_pregunta=usu_pre_res.fk_id_pregunta INNER JOIN respuestas ON respuestas.id_respuesta = usu_pre_res.fk_id_respuesta WHERE usuarios.id_usuario=$id ORDER BY RAND() LIMIT 3";   
                     $this->resultado=$this->conexion->con->prepare($this->consulta);
                     $this->resultado->execute();
                     return $this->resultado->fetchAll(PDO::FETCH_ASSOC);
               }else{
                  return "error2";
               }
            }
         }else{
            return "error1";
         }
      }

      public function validacion2()
      {
         $this->consulta="SELECT * FROM usuarios WHERE correo='$this->correo'";
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         $arreglo = $this->resultado->fetchAll(PDO::FETCH_ASSOC);
         $exito=0;
         $error=[];
         if (count($arreglo)>=1) {
            foreach ($arreglo as $key => $value) {
               if (password_verify($this->password, $value['contrasena']))  {  
                  $id = $value['id_usuario']; 
                  $nombre = $value['nombre']; 
                  for ($j=0; $j < count($this->preguntas); $j++) { 
                     $idPregunta = $this->preguntas[$j];
                     $this->consulta="SELECT preguntas.id_pregunta, respuestas.id_respuesta, respuestas.respuesta FROM usu_pre_res INNER JOIN usuarios ON usuarios.id_usuario = usu_pre_res.fk_id_usuario INNER JOIN preguntas ON preguntas.id_pregunta=usu_pre_res.fk_id_pregunta INNER JOIN respuestas ON respuestas.id_respuesta = usu_pre_res.fk_id_respuesta WHERE usuarios.id_usuario=$id AND preguntas.id_pregunta=$idPregunta";   
                     $this->resultado=$this->conexion->con->prepare($this->consulta);
                     $this->resultado->execute();
                     $arreglo2 = $this->resultado->fetchAll(PDO::FETCH_ASSOC);                        
                     foreach ($arreglo2 as $key => $val) {
                        if (password_verify($this->respuestas[$j], $val['respuesta']))  {  
                              
                              $exito += 100;
                        }else{
                           array_push($error,'La respuesta de la pregunta '.($j+1).' es incorrecta');
                        }
                     }
                  }
               }
            }

            if ($exito== 300) {
               session_start();
               $_SESSION['id'] = $id;
               $_SESSION['nombre'] = $nombre;
               return 'correcto';
            }else{
               return $error;
            }
         }
      }


      public function traerPregunta()
      {
         session_start();
         $id= $_SESSION['id'];
         $this->consulta="SELECT preguntas.* FROM preguntas INNER JOIN usu_pre_res ON preguntas.id_pregunta=usu_pre_res.fk_id_pregunta INNER JOIN usuarios ON usu_pre_res.fk_id_usuario=usuarios.id_usuario WHERE usuarios.id_usuario='$id' ORDER BY RAND() LIMIT 1";   
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         return $this->resultado->fetchAll(PDO::FETCH_ASSOC);
      }

      public function validacionPregunta()
      {
         session_start();
         $id= $_SESSION['id'];
         $this->consulta="SELECT respuestas.respuesta FROM usu_pre_res INNER JOIN usuarios ON usuarios.id_usuario = usu_pre_res.fk_id_usuario INNER JOIN preguntas ON preguntas.id_pregunta=usu_pre_res.fk_id_pregunta INNER JOIN respuestas ON respuestas.id_respuesta = usu_pre_res.fk_id_respuesta WHERE usuarios.id_usuario='$id' AND preguntas.id_pregunta='$this->preguntas'";   
         $this->resultado=$this->conexion->con->prepare($this->consulta);
         $this->resultado->execute();
         $arreglo2 = $this->resultado->fetchAll(PDO::FETCH_ASSOC);                        
         foreach ($arreglo2 as $key => $val) {
            if (password_verify($this->respuestas, $val['respuesta']))  {  
               return 1;
            }else{
               return 0;
            }
         }
      }
}

?>