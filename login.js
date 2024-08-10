document.getElementById("formularioLogin").addEventListener("submit",function(event){
    event.preventDefault()
    let email = document.getElementById("emailRegistro").value
    let password = document.getElementById("contraseñaRegistro").value
 
    //verifico si es administrador
    if (email === administrador.emailRegistro && password === administrador.contraseñaRegistro) {
        alert("Bienvenido Administrador")
        location.assign("") 
        return;
     
     }
 

})