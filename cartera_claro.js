const cartera = () => {
	var guardarEstrellas = 0;

	const contarDinero = (dinero) => {
		if (dinero > 100) {
			guardarEstrellas++;
		}
		console.log(`Usted tiene ${guardarEstrellas} estrellas`);
	};

	return contarDinero;
};

let miCartera = cartera();

miCartera(101);
miCartera(200);
miCartera(201);
