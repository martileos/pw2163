var inicioUsuarios = function()
{
	
	var validaUsuario = function()
	{

		//Extraer los datos de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Preparar los parámetros para AJAX
		var parametros = "opcion=valida"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random();
		
		//Validamos que no esten vacíos
		if(usuario!="" && clave!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						$("#entradaUsuario").hide("slow");
						$("nav").show("slow"); 
					}
					else
					{
						alert("Datos incorrectos :(");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
			});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);
	var teclaClave = function(tecla)
	{
		if(tecla.which == 13) //Tecla enter.
		{
			validaUsuario(); //Función que valida al usuario.
		}	
	}
	//keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input.
	$("#txtClave").on("keypress",teclaClave);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);














