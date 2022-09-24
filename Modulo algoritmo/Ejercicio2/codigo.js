let password = prompt("Escribe una contraseña");

let Contador = 0; 
while(Contador < 3){
	let passwordCompare =  prompt("Repite la contraseña");
	if(password!=passwordCompare){
		Contador++;
		if (Contador == 3) {
			alert("Tenes que ejercitar la memoria");
		}
		
	}
	else{
		alert("Felicitaciones recodas tu contraseña");
		Contador = 3;

	} 
		
}