let maximo=1000;
let minimo=0;
function NumeroAleatorio(minimo,maximo) {
	return Math.floor(Math.random()*((maximo+1)-minimo)+minimo);
};

let numero = -1;
let num = NumeroAleatorio(minimo,maximo);
	while(numero!=num){	
		numero = prompt("Sea ha generado un numero aleatorio de 0 a 1000 debe adivinar cual es");
		//alert(num);
		if(numero < num){
			alert("el numero ingresado es menor");

		}else if (numero == num){
			alert("Adivino el numero");
			}else{
				alert(" el numero ingresado es mayor")
			}
}