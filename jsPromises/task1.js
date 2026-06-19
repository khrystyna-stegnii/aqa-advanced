//Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function timeOutMessage (phrase, time) {
    setTimeout(function () {
        console.log(phrase);
    }, time);
}

timeOutMessage('This task is completed in 4 seconds', 4000);