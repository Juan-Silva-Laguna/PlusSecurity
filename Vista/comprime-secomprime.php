<?php
    /*
    //COMPRIME
    $zip = new ZipArchive();
    if ($zip->open('datos.sec.zip', ZipArchive::CREATE) === TRUE) {
        $zip->setPassword('juan');
        $zip->addFile('datos.sec');
        $zip->setEncryptionName('datos.sec', ZipArchive::EM_AES_256);
        $zip->close();
        echo "Ok\n";
        unlink('datos.sec');
    } else {
        echo "KO\n";
    }
    
    */ 
///*
    //DESCOMPRIME
     $zip = new ZipArchive;
      $comprimido= $zip->open('datos.sec.zip');
     if ($comprimido=== TRUE) {
        if ($zip->setPassword("juan"))
        {
            if (!$zip->extractTo(__DIR__))
                echo "Extraction failed (wrong password?)";
        }
       //$zip->extractTo('MisArchivo/');
         $zip->close();
          echo 'El fichero se descomprimio correctamente!';
          unlink('datos.sec.zip');
     } else {
          echo 'Error descomprimiendo el archivo zip';
     }
//*/   
 
?>