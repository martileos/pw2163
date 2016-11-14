// DOM = Modelo de objetos del documento
var inicio = function() //main
{
	var dameclic = function()
	{
		alert("Le di clic a un botón");
	}
	$("#dameClic").on("click",dameclic);
}

//Inicializar nuestro Documento
$(document).on("ready",inicio);