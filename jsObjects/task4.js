const person = {
    firstName: 'Alex',
    lastName: 'Lee',
    age: 30,
};

person.email = 'alex.lee@example.com';

delete person.age;

console.log(person);