class Stack{
	constructor(){
		this.item = {};
		this.top = 0;
	}

	push(data){
		this.top++;
		this.item[this.top] = data;
	}

	pop(){
		let DeleteData;

		if(this.top){
			DeleteData = this.item[this.top];
			delete this.item[this.top];
			this.top--;
			return DeleteData;
		}
	}

	getSize(){
		return this.top;
	}

	isEmpty(){
		if (!this.getSize()) {
			return true;
		} else {
			return false;
		}
	}


}

let nuevo = 10;
let viejo = 40;
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);


function Reemplazar(stack,nuevo,viejo){
	const stackAux = new Stack();
	while(stack.isEmpty()==false){
		if (stack.item[stack.top]==viejo) {
			stackAux.push(nuevo);
			stack.pop();
		} else {
			stackAux.push(stack.item[stack.top]);
			stack.pop();
		}
	}
	
	while(stackAux.isEmpty()==false){
		stack.push(stackAux.item[stackAux.top]);
		stackAux.pop();
	} 

	return stack;
}


console.log(Reemplazar(stack,nuevo,viejo));



