$(document).ready(function() {
    $("#personales").click(function(){
        $("#content-description").load("personales.html");
    });
    
    $("#intereses").click(function(){
        $("#content-description").load("intereses.html");
    });
    
    $("#contactos").click(function(){
        $("#content-description").load("contacto.html");
    });
    
    $("#redes").click(function(){
        $("#content-description").load("redes.html");
    });

    $("#curso").click(function(){
        $("#content-description").load("curso.html");
    });

    $("#educacion").click(function(){
        $("#content-description").load("educacion.html");
    });

    $("#idioma").click(function(){
        $("#content-description").load("idiomas.html");
    });

    $("#sobremi").click(function(){
        $("#content-description").load("sobremi.html");
    });

    $("#referencia").click(function(){
        $("#content-description").load("referencias.html");
    });

    $("#experienciaprof").click(function(){
        $("#content-description").load("experienciaprofesional.html");
    });

    $("habilidades").click(function(){
        $("#content-description").load("habilidades.html");
    });
    
});