// should return 'Дуже добре'

let averageGrade = 85;
if (averageGrade < 60) {
	console.log('Незадовільно');
} else if (averageGrade <= 70) {
	console.log('Задовільно');
} else if (averageGrade <= 80) {
	console.log('Добре');
} else if (averageGrade <= 90) {
	console.log('Дуже добре');
} else if (averageGrade <= 100) {
	console.log('Відмінно');
}

// should return 'Задовільно'
let averageGrade1 = 60;
if (averageGrade1 >= 0 && averageGrade1 < 60) {
	console.log('Незадовільно');
} else if (averageGrade1 >= 60 && averageGrade1 <= 70) {
	console.log('Задовільно');
} else if (averageGrade1 >= 71 && averageGrade1 <= 80) {
	console.log('Добре');
} else if (averageGrade1 >= 81 && averageGrade1 <= 90) {
	console.log('Дуже добре');
} else if (averageGrade1 >= 91 && averageGrade1 <= 100) {
	console.log('Відмінно');
} else {
	console.log('Невірне значення');
}
