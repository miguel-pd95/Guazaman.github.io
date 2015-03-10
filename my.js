$(document).ready(function(){
	alert("Java");
	$("p").text("No hay error");
	$("#parrafo").css("color", "red");
	$("#parrafo").css("background-color", "blue");
	$("#body").css("background-color", "green");
	$("#boton").click(function(){
    	$("#parrafo").animate({left: '250px'});
	}); 
});