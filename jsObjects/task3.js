const car1 = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2025,
};

const car2 = {
	brand: 'Audi',
	model: 'A5',
	owner: 'John Mason',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
