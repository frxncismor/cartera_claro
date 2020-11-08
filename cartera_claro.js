const cartera = () => {
	var guardarEstrellas = 0;

	const contarDinero = (dinero) => {
		let resultado = dinero / 100;
		if (resultado > 0) {
			guardarEstrellas += resultado;
		}
		let elemento = document.querySelector('h2');
		elemento.innerHTML = `Usted tiene ${guardarEstrellas} ⭐`;
	};

	return contarDinero;
};

let miCartera = cartera();

function ingresarDinero() {
	let dinero = document.getElementById('money').value;
	miCartera(dinero);
	limpiar();
}

function limpiar() {
	let input = document.getElementById('money');
	input.value = '';
}

function addBackground() {
	let elemento = document.getElementById('button');
	elemento.classList.add('shadow');
	elemento.classList.remove('shadow-out');
}

function removeBackground() {
	let elemento = document.getElementById('button');
	elemento.classList.remove('shadow');
	elemento.classList.add('shadow-out');
}
