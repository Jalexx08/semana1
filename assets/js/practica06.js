//MiniCalculadora

const miniCalculadora = () => {
	//Creamos opción de menu

	let op = prompt(
		'Escriba la opción correspondiente a la expresión: \n A-Suma \n B - Resta \n C - Multiplica \n D - Divide '
	);

	if (op == null) {
		alert('Debe ingresar algun dato');
	} else {
		op = op.toLowerCase();

		if (op != 'a' && op != 'b ' && op != 'c' && op != 'd') {
			console.log('Debe ser una opción entre A y D');
		} else {

            let num1 = parseFloat( prompt("ingrese el número 1"));
            let num2 = parseFloat( prompt("ingrese el número 2"));
            let resultado = 0;
		}
	}
};
