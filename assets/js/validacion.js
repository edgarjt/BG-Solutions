function verificar(){
    var nombre, apellido, correo, telefono, mensaje, siglas;
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellido").value;
correo = document.getElementById("correo").value;
telefono = document.getElementById("numero").value;
mensaje = document.getElementById("mensaje").value;

siglas = /\w+@\w+\.+[a-z]/;
var expresionTel = /^([0-9\+\s\+\-])+$/;

if(nombre === "" || apellido === "" || correo === "" || mensaje ===""){
document.getElementById("alerta").innerHTML="Todos los campos son requeridos";
return false;
}else if (!siglas.test(correo)){
    document.getElementById("alerta-correo").innerHTML="Ingresa un correo valido";
    return false;
}else if(telefono.length>10){
document.getElementById("alerta-telefono").innerHTML="El numero telefonico es demasiado extenso";
return false;
}else if (telefono.length<10){
    document.getElementById("alerta-telefono").innerHTML="El numero telefonico es muy corto";
    return false;
}else if(!expresionTel.test(telefono)){
    document.getElementById("alerta-telefono").innerHTML="Ingresar un télefono valido";
    return false;
}else if (mensaje.length>500){
    document.getElementById("alerta-mensaje").innerHTML="Solo se aceptan 250 carcateres";
    return false;
}
};
