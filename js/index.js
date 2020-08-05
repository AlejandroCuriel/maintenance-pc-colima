/*IIFE*/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector('#apellido');
        let telefono = document.querySelector('#telefono');
        let email = document.querySelector('#email');
        let reason = document.querySelector('#reason');
        let btnRegistro = document.querySelector('#btnRegistro');
        let divField = document.querySelector('#error');


        const validarCampos = function () {
            if (nombre.value === '' || nombre.value.length == 0 || /^\s+$/.test(nombre.value)) {
                console.log('Favor de llenar el campo del nombre');
                nombre.setCustomValidity("Este campo es necesario");
            } else {
                nombre.setCustomValidity("");
                if (apellido.value === '' || apellido.value.length == 0 || /^\s+$/.test(apellido.value)) {
                    console.log('Favor de llenar el campo del apellido');
                    apellido.setCustomValidity("Este campo es necesario");
    
                } else {
                    apellido.setCustomValidity("");
                    if (telefono.value === '' || isNaN(telefono.value) == true || /^\s+$/.test(telefono.value)) {
                        console.log('Por favor de ingresar un telefono valido');
                        telefono.setCustomValidity("Este campo es necesario");
        
                    } else {
                        telefono.setCustomValidity("");
                        if (telefono.value === '' || isNaN(telefono.value) == true || /^\s+$/.test(telefono.value)) {
                            console.log('Por favor de ingresar un telefono valido');
                            telefono.setCustomValidity("Este campo es necesario");
            
                        } else {
                            telefono.setCustomValidity("");
                            if (email.value === '' || /^\s+$/.test(email.value)) {
                                console.log('Favor de llenar el campo del email');
                                email.setCustomValidity("Este campo es necesario");
                
                            } else {
                                email.setCustomValidity("");
                                if (reason.value == null || reason.value === '' || /^\s+$/.test(reason.value)) {
                                    console.log('Escribenos en que podemos ayudarte');
                                    reason.setCustomValidity("Este campo es necesario");
                    
                                } else {
                                    reason.setCustomValidity("");
                                }
                            }
                        }
                    }
                }
            }
            
            
            
            

        }

        btnRegistro.addEventListener('click', validarCampos);
    })



})();