function handleNum(num, onHandleEvenCb, onHandleOddCb) {
	if (num % 2 === 0) {
		onHandleEvenCb(num);
	} else {
		onHandleOddCb(num);
	}
}

function handleEven() {
	console.log('number is even');
}

function handleOdd() {
	console.log('number is odd');
}
handleNum(10, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);
