const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

let numero = prompt("deme un numero");


if (esPrimo(numero) == true) { 
	document.write("el numero"+numero+" es primo");
}
else if (esPrimo(numero) == false) { 
	document.write("el numero "+numero+" no es primo");
}	