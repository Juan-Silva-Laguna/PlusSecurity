<?php
namespace entidadUsuario;
class Usuario{
    private $idUsuario;
    private $nombre;
    private $correo;
    private $celular;
    private $password;
    private $respuestas;
    private $preguntas;
    private $tipo;

    /**
     * Get the value of idUsuario
     */ 
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * Set the value of idUsuario
     *
     * @return  self
     */ 
    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }


    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of celular
     */ 
    public function getCelular()
    {
        return $this->celular;
    }

    /**
     * Set the value of celular
     *
     * @return  self
     */ 
    public function setCelular($celular)
    {
        $this->celular = $celular;

        return $this;
    }

    /**
     * Get the value of correo
     */ 
    public function getCorreo()
    {
        return $this->correo;
    }

    /**
     * Set the value of correo
     *
     * @return  self
     */ 
    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of preguntas
     */ 
    public function getPreguntas()
    {
        return $this->preguntas;
    }

    /**
     * Set the value of preguntas
     *
     * @return  self
     */ 
    public function setPreguntas($preguntas)
    {
        $this->preguntas = $preguntas;

        return $this;
    }

    
    
    /**
     * Get the value of respuestas
     */ 
    public function getRespuestas()
    {
        return $this->respuestas;
    }

    /**
     * Set the value of respuestas
     *
     * @return  self
     */ 
    public function setRespuestas($respuestas)
    {
        $this->respuestas = $respuestas;

        return $this;
    }

    /**
     * Get the value of tipo
     */ 
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set the value of tipo
     *
     * @return  self
     */ 
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }
}

?>