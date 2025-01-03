let facil = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

mostrar('');

function mostrar(buscar) {
    $.post('../Controlador/clave.controlador.php', {operacion: 'mostrar',alias: buscar}, function (respuesta) {
        let tbody = '';
        let datos = JSON.parse(respuesta);
        datos.forEach((dato,i) => {
            tbody += `
                <tr>
                    <th>${dato.alias}</th>
                    <th class=" text-right">
                        <button class="btn btn-light" onclick="ver(${dato.id_clave}, null, 'show')"><i class="fa fa-eye" style="width: 14px;"></i></button>                        
                        <button class="btn btn-warning" onclick="editar(${dato.id_clave}, null, 'update')"><i class="fa fa-edit" style="width: 14px;"></i></button>
                        <button class="btn btn-danger" onclick="eliminar(${dato.id_clave}, null, 'delete')"><i class="fa fa-trash" ></i></button>
                    </th>
                </tr>
            `;
        }); 
        $('#cuerpoTabla').html(tbody);
    })
}

function guardar() {
    setTimeout(() => {
        $('#swal2-html-container').attr('style','padding-left: 0px;');                    
    }, 100);
    Swal.fire({
        title: 'Guardar Datos',
        html: `
        <input type="text" id="alias" class="swal2-input" placeholder="Alias">
        <label>Mencione donde utilizara su clave</label>
        
        <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
        <label>Mencione usuario que utilizara</label>
        
        <input type="text" id="clave" class="swal2-input" placeholder="clave">
        <label>Mencione la clave que utilizara</label>`,
        confirmButtonText: 'Guardar',
        focusConfirm: false,
        preConfirm: () => {
          const alias = Swal.getPopup().querySelector('#alias').value
          const usuario = Swal.getPopup().querySelector('#usuario').value
          const clave = Swal.getPopup().querySelector('#clave').value
          if (!alias || !usuario|| !clave) {
            Swal.showValidationMessage(`Por favor ingrese todos los datos   `)
          }
          return { alias: alias, usuario: usuario , clave: clave }
        }
      }).then((result) => {
        let contrasena ='';

        for (let i = 0; i < 100; i++) {
            contrasena  += facil[Math.floor(Math.random() * (facil.length - 0)) + 0];
        }
        
        let datos = {
            alias: result.value.alias,
            usuario: result.value.usuario,
            clave: result.value.clave,
            contrasena: contrasena,
            operacion: 'guardarClave'
        }
        
        $.post('../Controlador/clave.controlador.php', datos, function (respuesta) {
            if (respuesta == '1') {
                Swal.fire(
                    'Se guardaron los datos con exito',
                    '',
                    'success'
                )
                mostrar('');
            }else{
                Swal.fire(
                    'No se lograron guardar lo datos',
                    'Por favor vuelve a intentar mas tarde',
                    'error'
                )
            }
        })
    })
}

function eliminar(id, val, tipo) {
    if (val == null) {
        validacion(id, tipo);
    }else{
        if (Number(val)) {
            Swal.fire({
                title: '    ',
                text: 'Seguro de eliminar estos datos?',
                icon: 'error',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Si, elimanar.',
                showCloseButton: true,
                showCancelButton: true,
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.post('../Controlador/clave.controlador.php', {operacion: 'eliminar', id: id}, function (respuesta) {
                        console.log(respuesta);
                        if (JSON.parse(respuesta)) {
                            Swal.fire('Eliminado!', '', 'success')
                        }else{
                            Swal.fire('Error al eliminar!', '', 'error')
                        }
                        mostrar('');
                    })                  
                }
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Respuesta erronea, no puedes ver estos datos',
                icon: 'error',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Aceptar'
            })
        }
    }    
}

function editar(id, val, tipo) {
    if (val == null) {
        validacion(id, tipo);
    }else{
        if (Number(val)) {
            $.post('../Controlador/clave.controlador.php', {operacion: 'mostrarEditar', id: id}, function (respuesta) {
                console.log(respuesta);
                let datos = JSON.parse(respuesta);
                let concat='';
                datos.forEach((dato,i) => {
                    concat += `
                    <input type="hidden" id="id" value="${dato.id_clave}">
                    <input type="text" id="alias" class="swal2-input" value="${dato.alias}" placeholder="Alias">
                    <label>Sito donde utilizara su clave</label>
                    
                    <input type="text" id="usuario" class="swal2-input" value="${dato.usuario}" placeholder="usuario">
                    <label>Usuario que utilizara</label>
                    
                    <input type="text" id="clave" class="swal2-input" value="${dato.clave}" placeholder="Clave">
                    <label>Clave que utilizara</label>`;
                }); 
                setTimeout(() => {
                    $('#swal2-html-container').attr('style','padding-left: 0px;');                    
                }, 100);
                Swal.fire({
                    title: 'Editar Datos',
                    html: concat,
                    confirmButtonText: 'Editar',
                    focusConfirm: false,
                    preConfirm: () => {
                      const alias = Swal.getPopup().querySelector('#alias').value
                      const usuario = Swal.getPopup().querySelector('#usuario').value
                      const clave = Swal.getPopup().querySelector('#clave').value
                      const id = Swal.getPopup().querySelector('#id').value
                      if (!alias || !usuario|| !clave) {
                        Swal.showValidationMessage(`Por favor ingrese todos los datos   `)
                      }
                      return { alias: alias, usuario: usuario , clave: clave, id: id }
                    }
                  }).then((result) => {
                    let contrasena ='';
    
                    for (let i = 0; i < 100; i++) {
                        contrasena  += facil[Math.floor(Math.random() * (facil.length - 0)) + 0];
                    }
                    
                    let datos = {
                        id: result.value.id,
                        alias: result.value.alias,
                        usuario: result.value.usuario,
                        clave: result.value.clave,
                        contrasena: contrasena,
                        operacion: 'editar'
                    }
                    console.log(datos);
                    $.post('../Controlador/clave.controlador.php', datos, function (respuesta) {
                        if (respuesta == '1') {
                            Swal.fire(
                                'Se editaron los datos con exito',
                                '',
                                'success'
                            )
                            mostrar('');
                        }else{
                            Swal.fire(
                                'No se logro editar los datos',
                                'Por favor vuelve a intentar mas tarde',
                                'error'
                            )
                        }
                    })
                })
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Respuesta erronea, no puedes editar estos datos',
                icon: 'error',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Aceptar'
            })
        }
    }    
}

function ver(id, val, tipo) {
    if (val == null) {
        validacion(id, tipo);
    }else{
        if (Number(val)) {
            
            $.post('../Controlador/clave.controlador.php', {operacion: 'mostrarEditar', id: id}, function (respuesta) {
                console.log(respuesta);
                let datos = JSON.parse(respuesta);
                let concat='';
                datos.forEach((dato,i) => {
                    concat += `
                    <center>
                        <div class="alias">
                            <i class="fa fa-copy" style="color: #000; font-size: 25px; position: absolute; left: 30px; padding-top: 35px;" onclick="copiar('${dato.alias}','alias')"></i>
                        </div>                        
                        <input type="text" id="alias" value="${dato.alias}" class="swal2-input" disabled><br>
                        <label>Este es el sitio</label><br>
                        <div class="usuario">
                            <i class="fa fa-copy" style="color: #000; font-size: 25px; position: absolute; left: 30px; padding-top: 35px;" onclick="copiar('${dato.usuario}','usuario')"></i>
                        </div>
                        <input type="text" id="usuario" class="swal2-input" value="${dato.usuario}" disabled><br>
                        <label>Este es el sitio</label><br>
                        <div class="clave">
                            <i class="fa fa-copy" style="color: #000; font-size: 25px; position: absolute; left: 30px; padding-top: 35px;" onclick="copiar('${dato.clave}','clave')"></i>
                        </div>    
                        <input type="text" id="clave" class="swal2-input" value="${dato.clave}"     disabled><br>
                        <label>Esta es la clve</label>
                    </center>`;
                        
                }); 
                setTimeout(() => {
                    $('#swal2-html-container').attr('style','padding-left: 0px;');                    
                }, 100);
                Swal.fire({
                    html: concat,
                    confirmButtonColor:'#000000c4',
                    confirmButtonText: 'Cerrar'
                  })
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Respuesta erronea, no puedes ver estos datos',
                icon: 'error',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Aceptar'
            })
        }
    }    
}

function copiar(texto, div) {
    console.log($(this).attr('id'));
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    $('.'+div).html(`<i class="fa fa-check" style="color: #3CDF39; font-size: 25px; position: absolute; left: 30px; padding-top: 35px;"></i>`);
}

function validacion(id, tipo) {
    let result = null;
    $.post('../Controlador/usuario.controlador.php', {operacion: 'traerPregunta'}, function (respuesta) {            
        let datos = JSON.parse(respuesta);
        datos.forEach((dato,i) => {
            setTimeout(() => {
                $('#swal2-html-container').attr('style','padding-left: 0px;');                    
            }, 100);
            Swal.fire({
                title: 'Pregunta de <br> Seguridad',
                html: `
                <input type="hidden" id="idPregunta" value="${dato.id_pregunta}">
                <input type="text" id="respuesta" class="swal2-input" placeholder="respuesta"><br>
                <label>${dato.pregunta}</label>`,
                confirmButtonText: 'Validar',
                focusConfirm: false,
                preConfirm: () => {
                    const respuesta = Swal.getPopup().querySelector('#respuesta').value
                    const idPregunta = Swal.getPopup().querySelector('#idPregunta').value
                    if (!respuesta) {
                    Swal.showValidationMessage(`Por favor ingrese todos los datos   `)
                    }
                    return { respuesta: respuesta, idPregunta: idPregunta}
                }
                }).then((result) => {
                let datos = {
                    idPregunta: result.value.idPregunta,
                    respuesta: result.value.respuesta,
                    operacion: 'validacionPregunta'
                }      
                console.log(datos);              
                $.post('../Controlador/usuario.controlador.php', datos, function (respuesta) {
                    switch (tipo) {
                        case 'delete':
                            eliminar(id, respuesta, tipo);
                            break;
                        case 'update':
                            editar(id, respuesta, tipo);
                            break;
                        case 'show':
                            ver(id, respuesta, tipo);
                            break;
                    }
                })
            })
        });
            
    })
    //sconsole.log(result);
    return result;
}
