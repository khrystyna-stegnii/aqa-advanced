function countRecursion(num) {
	console.log(num);
	if (num <= 0) {
		return;
	}
	countRecursion(num - 1);
}
countRecursion(5);
