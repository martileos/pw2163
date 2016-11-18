<h1>Alta de usuarios</h1>
<form action="ejemplo.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaUsuario"> <br>
	<input type="text" name="txtUsuario" id="txtUsuario"> <br>
	<input type="text" name="txtNombre" id="txtNombre"> <br>
	<input type="password" name="txtClave" id="txtClave"> <br>	
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select> <br>
	<input type="submit" value="Enviar">
</form>
<?php
	
?>


