const users = [
  { name: 'Matt', email: 'matt@example.com', age: 30 },
  { name: 'Nathan', email: 'nathan@example.com', age: 25 }
];

for (const { name, email, age } of users) {
 console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}