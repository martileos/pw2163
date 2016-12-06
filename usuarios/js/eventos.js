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
	var Alta = function()
	{
		$("h2").html("Alta de usuarios");
		$("#artAltaUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnGuardaUsuario").show();
	}
	var Baja = function()
	{
		$("h2").html("Baja de usuarios");
		$("#artAltaUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnBajaUsuario").show();
	}
	var Cambio = function()
	{
		$("h2").html("Cambio de usuarios");
		$("#artAltaUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnCambioUsuario").show();
	}


	var GuardaUsuario = function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var usuario = $("#txtUsuarioNombre").val(); 
		var nombre  = $("#txtNombre").val();
		var clave   = $("#txtClaveNombre").val();
		var tipo    = $("#txtTipo").val();
		if(usuario!="" && nombre!="" && clave!="" && tipo!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=guarda"+
							 "&usuario="+usuario+
							 "&nombre="+nombre+
							 "&clave="+clave+
							 "&tipo="+tipo+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Usuario registrado");
						$("#artAltaUsuarios > input").val(""); 
					}
					else
						alert("Usuario no registrado y/o duplicado");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");

	}
	var teclaUsuario = function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var usuario = $("#txtUsuarioNombre").val();
			var parametros = "opcion=buscaUsuario"+
							 "&usuario="+usuario+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						$("#txtNombre").val(response.nombre);
						$("#txtClaveNombre").val(response.clave);
						$("#txtTipo option:selected").text(response.tipo);
					}
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");
				}
			});
		}
	}
	//keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input.
	$("#txtClave").on("keypress",teclaClave);
	$("#btnAlta").on("click",Alta);
	$("#btnBaja").on("click",Baja);
	$("#btnCambio").on("click",Cambio);
	$("#txtUsuarioNombre").on("keypress",teclaUsuario);
	$("#btnGuardaUsuario").on("click",GuardaUsuario);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);














