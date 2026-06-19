//Завдання 2

//В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//Copy code
//<https://jsonplaceholder.typicode.com/todos/1>
//Функція повинна повертати як результат Promise що повертає об’єкт todo
//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//Copy code
//<https://jsonplaceholder.typicode.com/users/1>
//Функція повинна повертати як результат Promise що повертає об’єкт user
//Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

function fetchTodoById(todoId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json());
}

function fetchUserById(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json());
}

const todoPromise = fetchTodoById(1);
const userPromise = fetchUserById(1);

const allPromises = Promise.all([todoPromise, userPromise]);
const racePromise = Promise.race([todoPromise, userPromise]);

allPromises
    .then(result => console.log('There result for promise all is:', result))
    .catch(error => console.error(error));

racePromise
    .then(result => console.log('There result for promise race is:', result))
    .catch(error => console.error(error));