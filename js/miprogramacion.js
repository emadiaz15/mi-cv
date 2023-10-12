$(document).ready(function() {
    $("#conte").click(function(){
        $("#centro").load("conte.html");
    });
    
    $("#servicios").click(function(){
        $("#centro").load("servicios.html");
    });
    
    $("#contactos").click(function(){
        $("#centro").load("contactos.html");
    });
    
    $("#centro").load("conte.html");

    $("#mostrar").click(function(){
        $('#target').show("slow");
    });
    
    $("#ocultar").click(function(){
        $('#target').hide("fast");
    });
     
    $("#toggle").click(function(){
        $('#target').toggle("slow");
    });
});