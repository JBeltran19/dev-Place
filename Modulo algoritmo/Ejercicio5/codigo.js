const numeros  = [];
let num=0;
while (num !=-1){
		num = prompt("Ingresa numeros finalizara cuando ingreses -1");
	if (num!=-1) {
		numeros.push(num);
	}

}

let Maximo = numeros[0];
let Minimo = numeros[0];
let SumaDeNumeros=0;

for (let i = 0; i < numeros.length; i++) {
	document.write(""+numeros[i]+",");
	Maximo = Math.max(Maximo,numeros[i]);
	Minimo = Math.min(Minimo,numeros[i]);
	SumaDeNumeros += parseInt(numeros[i]);
}

let frase = `<br>a.- Mayor numero introducido : <b>${Maximo}</b><br>
			 b.- Menor numero introducido : <b>${Minimo}</b><br>
			 c,d.- Suma de los numero : <b>${SumaDeNumeros}</b><br>`

document.write(frase);