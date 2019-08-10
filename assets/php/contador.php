<?php 

function contador(){
	$archivo = "assets/php/contador.txt";
	$fopen = fopen($archivo, "r");

	$contador = 0;
	if ($fopen) {
		$contador = fread($fopen, filesize($archivo));
		$contador = $contador + 1;
		fclose($fopen);
	}

	$fopen = fopen($archivo, "w+");
	if ($fopen) {
		fwrite($fopen, $contador);
		fclose($fopen);
	}
	return $contador;
}

$visitante = contador();
 ?>