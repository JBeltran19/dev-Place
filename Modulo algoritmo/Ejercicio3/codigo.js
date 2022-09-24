let Hora;
let años;
let HoraXtrabajo;

function Sueldo(Hora,años,HoraXtrabajo){
	let total;
	total= Hora * HoraXtrabajo;
	if (años >10) {
		total+= años*30;
	}
	return total
}

let ValorHora = prompt("ingresa el valor por hora de trabajo");

let Empleado = {
	Nombre: prompt("Nombre del empleado"),
	Antiguedad: prompt("Antiguedad del empleado"),
	HorasTrabajadas: prompt("Horas trabajadas"),

};

DatosEmpleado = `El nombre del empleado es: <b>${Empleado.Nombre}</b> <br>
				 La antiguedad es: <b>${Empleado.Antiguedad} años</b> <br>
				 Las horas trabajadas es: <b>${Empleado.HorasTrabajadas} hs</b><br>
				 El valor de la hora es: $ <b>${ValorHora}</b><br>
				 Sueldo total a cobrar es: $ <b>${Sueldo(ValorHora,Empleado.Antiguedad,Empleado.HorasTrabajadas)}</b><br>
				`;

document.write(DatosEmpleado); 