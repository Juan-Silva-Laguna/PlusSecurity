if (screen.width<=700) {
    $('#img1').html(`<img src="Recursos/img/logo.png" alt="logo" width="100" height="100" style="margin-left: 100px;">`);
    $('#img2').html(`<img src="Recursos/img/logo.png" alt="logo" width="100" height="100">`);
    $('#tmSideBar').attr('style','position: fixed;');
    $('.inner').attr('style','height:500px;overflow: scroll;');
}
else{
    $('#img2').html(`<img src="Recursos/img/logo.png" alt="logo" width="100" height="100">`);
}

let datos = {};

function div_register_1() {				
    $('#div-register-1').css('display','block');
    $('#div-register-2').css('display','none');
    $('#div-register-3').css('display','none');
    $('#div-register-4').css('display','none');
}

function div_register_2() {
    
    if ($('#nombre').val() != '' && $('#correo').val() != '' && $('#celular').val() != '' && $('#password').val() != '') {
        $('#div-register-1').css('display','none');
        $('#div-register-2').css('display','block');
        $('#div-register-3').css('display','none');
        $('#div-register-4').css('display','none');
        datos['nombre'] = $('#nombre').val();
        datos['correo'] = $('#correo').val();
        datos['celular'] = $('#celular').val();
        datos['password'] = $('#password').val();
    }
    else{
        $('#alert-register-1').html('<center><div class="alert" style="color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545;">Todos los campos son obligatorios</div></center><br>');
        setTimeout(() => {
            $('#alert-register-1').html('');
        }, 4000);
        
    }
}

function div_register_3() {
    
    if ($('input:radio[name=opcion]:checked').val()=='1') {
        $('#div-register-1').css('display','none');
        $('#div-register-2').css('display','none');
        $('#div-register-3').css('display','block');
        $('#div-register-4').css('display','none');
        datos['tipo'] = 'new';
    }
    else if ($('input:radio[name=opcion]:checked').val()=='2') {
        $('#div-register-1').css('display','none');
        $('#div-register-2').css('display','none');
        $('#div-register-3').css('display','none');
        $('#div-register-4').css('display','block');
        $('#respuesta1').val('');
        $('#respuesta2').val('');
        $('#respuesta3').val('');
        $('#respuesta4').val('');
        $('#respuesta5').val('');
        

        $.post('Controlador/usuario.controlador.php', {operacion: 'traer_preguntas'}, function (respuesta) {
            let datos = JSON.parse(respuesta);
            datos.forEach((dato,i) => {
                $('#pregunta'+(i+1)).html(dato.pregunta);
                $('#pregunta'+(i+1)).attr('data-index-number',dato.id_pregunta);
            }); 
        })
        datos['tipo'] = 'exist';
    }
    else{
        $('#alert-register-2').html('<center><div class="alert alert-danger">Por favor escoja una de las dos opcines</div></center>');
        setTimeout(() => {
            $('#alert-register-2').html('');
        }, 5000);
    }
}

function registrar() {
    Swal.fire({
        title: 'Cargando...',
        imageUrl: 'Recursos/img/cargando.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'cargando',
        showConfirmButton: false,
    })
    

    if (datos['tipo']=='exist') {
        if ($('#respuesta1').val() != '' && $('#respuesta2').val() != '' && $('#respuesta3').val() != '' && $('#respuesta4').val() != '' && $('#respuesta5').val() != '') {
            datos['pregunta1'] = $('#pregunta1').data('indexNumber');
            datos['pregunta2'] = $('#pregunta2').data('indexNumber');
            datos['pregunta3'] = $('#pregunta3').data('indexNumber');
            datos['pregunta4'] = $('#pregunta4').data('indexNumber');
            datos['pregunta5'] = $('#pregunta5').data('indexNumber');
            datos['respuesta1'] = $('#respuesta1').val();
            datos['respuesta2'] = $('#respuesta2').val();
            datos['respuesta3'] = $('#respuesta3').val();
            datos['respuesta4'] = $('#respuesta4').val();
            datos['respuesta5'] = $('#respuesta5').val();
        }
        else{
            $('#alert-register-4').html('<center><div class="alert" style="color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545;">Todos los campos son obligatorios</div></center><br>');
            setTimeout(() => {
                $('#alert-register-4').html('');
            }, 3000);
        }
    }
    else if (datos['tipo']=='new') {
        if ($('#res1').val() != '' && $('#res2').val() != '' && $('#res3').val() != '' && $('#res4').val() != '' && $('#res5').val() != '' && 
            $('#pre1').val() != '' && $('#pre2').val() != '' && $('#pre3').val() != '' && $('#pre4').val() != '' && $('#pre5').val() != '') {
            datos['pregunta1'] = $('#pre1').val();
            datos['pregunta2'] = $('#pre2').val();
            datos['pregunta3'] = $('#pre3').val();
            datos['pregunta4'] = $('#pre4').val();
            datos['pregunta5'] = $('#pre5').val();
            datos['respuesta1'] = $('#res1').val();
            datos['respuesta2'] = $('#res2').val();
            datos['respuesta3'] = $('#res3').val();
            datos['respuesta4'] = $('#res4').val();
            datos['respuesta5'] = $('#res5').val();
        }else{
            $('#alert-register-3').html('<center><div class="alert" style="color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545;">Todos los campos son obligatorios</div></center><br>');
            setTimeout(() => {
                $('#alert-register-3').html('');
            }, 3000);
        }
    }

    if (Object.keys(datos).length == 15) {
        datos['operacion'] = "registrar";
        $.post('Controlador/usuario.controlador.php', datos, function (respuesta) {
            let datos = JSON.parse(respuesta);
            console.log(datos);
            if (datos=='correcto') {
                Swal.fire({
                    title: 'Regitro Exitoso!',
                    text: 'Ya puedes comenzar a disfrutar de los servicios de Plus Security',
                    icon: 'success',
                    confirmButtonColor:'#000000c4',
                    confirmButtonText: 'Aceptar'
                })
                datos = {};
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Parece que hubo un herror por favor vuelve a intentarlo',
                    icon: 'error',
                    confirmButtonColor:'#000000c4',
                    confirmButtonText: 'Aceptar'
                })
            }
            $('#nombre').val('');
            $('#correo').val('');
            $('#celular').val('');
            $('#password').val('');
            $('#pre1').val('');
            $('#pre2').val('');
            $('#pre3').val('');
            $('#pre4').val('');
            $('#pre5').val('');
            $('#res1').val('');
            $('#res2').val('');
            $('#res3').val('');
            $('#res4').val('');
            $('#res5').val('');
            $('#respuesta1').val('');
            $('#respuesta2').val('');
            $('#respuesta3').val('');
            $('#respuesta4').val('');
            $('#respuesta5').val('');
            div_register_1();
        })
    }
    
}

function div_login_2() {
    if ($('#correo2').val() != ''  && $('#password2').val() != '') {
        let datos = {
            correo: $('#correo2').val(),
            password: $('#password2').val(),
            operacion: 'validacion1'
        }
        $.post('Controlador/usuario.controlador.php', datos, function (respuesta) {            
            let datos = JSON.parse(respuesta);
            console.log(datos);
            if (datos == 'error1') {
                Swal.fire({
                    title: 'Error!',
                    text: 'No se encontraron registros de '+$('#correo2').val(),
                    icon: 'error',
                    confirmButtonColor:'#000000c4',
                    confirmButtonText: 'Aceptar'
                })
                $('#correo2').val('');
            }else if (datos == 'error2') {
                Swal.fire({
                    title: 'Error!',
                    text: 'La clave es incorrecta, por favor intenta de nuevo.',
                    icon: 'error',
                    confirmButtonColor:'#000000c4',
                    confirmButtonText: 'Aceptar'
                })
                $('#password2').val('');
            }else{           
                datos.forEach((dato,i) => {
                    $('#pre-log-'+(i+1)).html(dato.pregunta);
                    $('#pre-log-'+(i+1)).attr('data-index-number',dato.id_pregunta);
                });
                $('#div-login-1').css('display','none');
                $('#div-login-2').css('display','block');
            }
        })        
    }
    else{
        $('#alert-login-1').html('<center><div class="alert" style="color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545;">Todos los campos son obligatorios</div></center><br>');
        setTimeout(() => {
            $('#alert-login-1').html('');
        }, 4000);
        
    }
}

function ingresar() {
    Swal.fire({
        title: 'Cargando...',
        imageUrl: 'Recursos/img/cargando.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'cargando',
        showConfirmButton: false,
    })
    let datos = {
        correo : $('#correo2').val(),
        password : $('#password2').val(),        
        pregunta1:$('#pre-log-1').data('indexNumber'),
        pregunta2:$('#pre-log-2').data('indexNumber'),
        pregunta3:$('#pre-log-3').data('indexNumber'),
        respuesta1:$('#res-log-1').val(),
        respuesta2:$('#res-log-2').val(),
        respuesta3:$('#res-log-3').val(),
        operacion:'validacion2'
    }
    console.log(datos);
    $.post('Controlador/usuario.controlador.php', datos, function (respuesta) {
        console.log(respuesta);
        let datos = JSON.parse(respuesta);
        console.log(datos);
        if (datos=='correcto') {
            Swal.fire({
                title: 'Bienvenido',
                icon: 'success',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                window.location.href = 'Vista/';
            })
        }else{
            let err='';
            for (let i = 0; i < datos.length; i++) {
                err += '• '+datos[i]+'<br><br>';              
            }
            Swal.fire({
                title: 'Error!',
                html: err,
                icon: 'error',
                confirmButtonColor:'#000000c4',
                confirmButtonText: 'Aceptar'
            })
        }
    })  
}

$(document).ready(function(){
    

    $("#olvido").on( 'change', function() {
        if($('#UserEmail').val() != '') {
            user = $('#UserEmail').val();
            $.post('../Controlador/usuario.recuperarClave.php', {user}, function (retorno) {
                let respuesta = JSON.parse(retorno);
            if (respuesta[0] == '1') {
                (function(){
                    emailjs.init("user_byEQvmqnhWJ1OiqfrbDSW");
                })();
                emailjs.send("gmail", "datos_de_acceso", {"to_email":respuesta[1],"from_name":"Cigarreria Perez sistema","from_email":"Sistema cigarreria perez","intro":respuesta[2],"enlace":respuesta[4],"pass":respuesta[3],"subject":"Recuperando tu contraseña"})
                .then(function(){ 
                    alerta(respuesta[5]+" tu nueva contraseña fue enviada a el correo", "alert alert-success", "nada");
                }, function(err) {
                    alerta(respuesta[1]+" no se logro enviar tu nueva contraseña", "alert alert-danger", "nada");
                });
            }else if (respuesta[0] == '0') {
                alerta(`No se logro restablecer su contraseña, intente mas tarde`, 'alert alert-danger', 'nada');
            }else if(respuesta[0] == '2'){
                alerta(`El ${respuesta[1]} usuario no existe`, 'alert alert-danger', 'nada');
            }
            })
            
        } else {
            alerta("Por favor ingrese unicamente su correo", "alert alert-warning", "nada");
        }
    });

    $(document).on('click', '#btn_iniciar', function () {
        event.preventDefault();
        const datos = {
            user: $('#UserEmail').val(),
            password: $('#UserPass').val(), 
            rol: $('#UserRol').val()
        };
        $.post('../Controlador/usuario.ingresar.php', datos, function (respuesta) {
            let datos = JSON.parse(respuesta);
            alerta(datos[0], datos[1], datos[2]);    
        })
      });
      
    function alerta(mensaje, clases, tipo) {
        document.querySelector('#grupo').style.display = 'none';
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(mensaje));
        div.className = clases;
        
        const divMensaje = document.querySelector('#mensajes');
        divMensaje.appendChild(div);
        if (clases != 'alert alert-danger') {
            setTimeout(() => {
                if (tipo != 'Empleado') {
                    $(location).attr('href','administrador/index.php');
                }else{
                    $(location).attr('href','empleado/index.php');
                }
            }, 4000);
        }
        else{
            setTimeout(() => {
                document.querySelector('#grupo').style.display = 'block';
                document.querySelector('#mensajes div').remove();
                $('#formulario').trigger('reset');
            }, 4000);
        }        
    }

});
