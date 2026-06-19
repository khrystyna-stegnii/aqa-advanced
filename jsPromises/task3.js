async function fetchTodoById(todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    return data;
}

async function printTodoById(todoId) {
    const todoData = await fetchTodoById(todoId);
    console.log(todoData);
}

printTodoById(1);

async function fetchUserById(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}
async function printUserById(userId) {
    const userData = await fetchUserById(userId);
    console.log(userData);
}   
printUserById(1);

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