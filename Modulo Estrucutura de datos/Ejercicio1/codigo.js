class Node {
	constructor(dato, Siguiente){
		this.dato = dato;
		this.Siguiente = Siguiente;
	}
}

class LinkedList {
	constructor(){
		this.cabecera = null;
		this.tamaño=0;
	}

	add(dato){
		const nuevoNodo = new Node(dato,null);
		if (!this.cabecera) {
			this.cabecera=nuevoNodo;
		} else {
			let sig = this.cabecera;
			while(sig.Siguiente){
				sig = sig.Siguiente;
			}

			sig.Siguiente = nuevoNodo;
		}
		this.tamaño++;
		
	}

	removerDato(dato){
		let ValorActual = this.cabecera;
		let Anterior = null;

		while(ValorActual != null){
		
			if (ValorActual.dato === dato) {
				if (!Anterior) {
					this.cabecera = ValorActual.Siguiente;
				} else {
					Anterior.Siguiente = ValorActual.Siguiente;
				}
				this.tamaño--;
				
			}
			Anterior = ValorActual;
			ValorActual = ValorActual.Siguiente;
		}
		
	}

	Imprimir(){
		if (!this.tamaño) {
			return null;
		}
		let ValorActual = this.cabecera;
		let result ='';
		while(ValorActual){
			result += ValorActual.dato += ' -> ';
			ValorActual = ValorActual.Siguiente;
		}
		result += 'FIN';
		return result;
	}

}

const linkedList = new LinkedList();

linkedList.add(12);
linkedList.add(1);
linkedList.add(10);
linkedList.add(5);
linkedList.add(3);
linkedList.add(1);
linkedList.add(14);
linkedList.add(1);
linkedList.add(12);


linkedList.removerDato(1);

console.log(linkedList.Imprimir());