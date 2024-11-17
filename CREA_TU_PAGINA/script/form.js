var miForm = document.querySelector("#form"); 
miForm.addEventListener("submit", (evento) => { var valido = validar(); 
    if (valido == false) { 
        evento.preventDefault(); 
    } else { 
        mostrarMensajeExito(); x
    } });

 
function setError(input, mensaje)
{
    const formControl= input.parentElement; 
    const small= formControl.querySelector("small"); //selecciona donde está escrito el mensaje
    formControl.className="form-control error"; //selecciona la clase de css
    small.innerText= mensaje
}
function setSuccess(input)
{
    const formControl= input.parentElement;
    formControl.className="form-control success";

}
    function validar() {
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");
        var telefono = document.getElementById("telefono");
    
        let correcto = true;
    
        let nombre_re = /^[a-zA-Z ]{3,40}$/;
        let apellido_re = /^[a-zA-Z ]{3,40}$/;
        let email_re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let telefono_re = /^\d{9}$/;
    
        if(nombre.value == "" || !nombre_re.test(nombre.value)){
            setError(nombre, "El campo nombre está vacío o no es válido.");
            correcto = false;
        } else {
            setSuccess(nombre);
        }
    
        if(apellido.value == "" || !apellido_re.test(apellido.value)){
            setError(apellido, "El campo apellido está vacío o no es válido.");
            correcto = false;
        } else {
            setSuccess(apellido);
        }
    
        if(email.value == "" || !email_re.test(email.value)){
            setError(email, "El campo email está vacío o no es válido.");
            correcto = false;
        } else {
            setSuccess(email);
        }
    
        if(telefono.value == "" || !telefono_re.test(telefono.value)){
            setError(telefono, "El campo teléfono está vacío o no es válido.");
            correcto = false;
        } else {
            setSuccess(telefono);
        }
    
        return correcto;
    }