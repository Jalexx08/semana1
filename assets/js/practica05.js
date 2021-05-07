// Operaciones

const sumaDosNumeros = () => {
	let num1 = parseInt(prompt('Ingresa el número 1'));
	let num2 = parseInt(prompt('Ingresa el número 2'));

	console.log(num1, num2);

	let resultado = num1 + num2;
	console.log(resultado);
};

const restaDosNumeros = () => {
	let num1 = parseInt(prompt('Ingresa el número 1'));
	let num2 = parseInt(prompt('Ingresa el número 2'));

	console.log(num1, num2);

	let resultado = num1 - num2;
	console.log(resultado);
};

const multDosNumeros = () => {
	let num1 = parseInt(prompt('Ingresa el número 1'));
	let num2 = parseInt(prompt('Ingresa el número 2'));

	console.log(num1, num2);

	let resultado = num1 * num2;
	console.log(resultado);
};

const dividirDosNumeros = () => {
	let num1 = parseInt(prompt('Ingresa el número 1'));
	let num2 = parseInt(prompt('Ingresa el número 2'));

	console.log(num1, num2);

	if (num2 == 0) {
		console.log('No se puede dividir entre cero');
	} else {
		let resultado = num1 / num2;
		console.log(resultado);
	}

	let resultado = num2 ==0 ? console.log('No se puede dividir entre cero') : console.log("resultado: " + num1/num2);

};


