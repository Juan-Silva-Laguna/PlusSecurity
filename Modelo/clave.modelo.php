<?php
namespace modeloClave;
use PDO;

include_once("../entidad/clave.entidad.php");
include_once("../entorno/conexion.php");
class Clave{
   private $idClave;
   private $alias;
   private $usuario;
   private $clave;
   private $contrasena;
   private $conexion;
   private $consulta;
   private $resultado;
   private $retorno;
    public function __construct(\entidadClave\Clave $ClaveE)
    {
        $this->conexion = new \Conexion();
        $this->idClave=$ClaveE->getIdClave();  
        $this->alias=$ClaveE->getAlias();  
        $this->usuario=$ClaveE->getUsuario();  
        $this->clave=$ClaveE->getClave();  
        $this->contrasena=$ClaveE->getContrasena();  
    }

    public function guardarClave()
    {
       session_start();
       $idUsuario = $_SESSION['id'];
       $this->consulta="INSERT INTO claves VALUES(null, '$this->alias', '$this->usuario', hex(AES_ENCRYPT('$this->clave','$this->contrasena')),'$this->contrasena', '$idUsuario')";
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

    public function mostrar()
    {
       session_start();
       $id = $_SESSION['id'];
       $this->consulta="SELECT id_clave, alias FROM claves WHERE fk_id_usuario='$id' AND alias LIKE '%$this->alias%' ORDER BY id_clave DESC";
       $this->resultado=$this->conexion->con->prepare($this->consulta);
       $this->resultado->execute();
       return $this->resultado->fetchAll(PDO::FETCH_ASSOC);
    }

    public function eliminarClave()
    {
       $this->consulta="DELETE FROM claves WHERE id_clave='$this->idClave'";
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

    public function mostrarEditar()
    {
       $this->consulta="SELECT id_clave, alias, usuario, aes_decrypt(unhex(clave), (SELECT contrasena FROM claves WHERE id_clave='$this->idClave')) AS clave FROM claves WHERE id_clave='$this->idClave'";
       $this->resultado=$this->conexion->con->prepare($this->consulta);
       $this->resultado->execute();
       return $this->resultado->fetchAll(PDO::FETCH_ASSOC);
    }

    public function editar()
    {
         $this->consulta="UPDATE claves SET alias='$this->alias', usuario='$this->usuario', clave=hex(AES_ENCRYPT('$this->clave','$this->contrasena')), contrasena='$this->contrasena'  WHERE id_clave='$this->idClave'";
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
}

?>