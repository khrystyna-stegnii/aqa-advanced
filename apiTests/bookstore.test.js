/* eslint-disable no-undef */
const axios = require('axios');

describe('API Tests for GET Books Requests', () => {
	test('Test1: To Get All Books', async () => {
		const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
		expect(response.status).toBe(200);
		expect(response.data.books).toHaveLength(8);
	})
	
	test('Test2: To Get a Book by ISBN', async () => {
		const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781491904244');
		expect(response.status).toBe(200);
		expect(response.data.isbn).toBe('9781491904244');
		expect(response.data.title).toBe('You Don\'t Know JS');
		expect(response.data.subTitle).toBe('ES6 & Beyond');
		expect(response.data.author).toBe('Kyle Simpson');
	})
	
	test('Test3: To Get a Book by invalid ISBN', async () => {
		const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=97ddd81491904244', {
			validateStatus: () => true
		});
		expect(response.status).toBe(400);
		expect(response.data.message).toBe('ISBN supplied is not available in Books Collection!');
	})
});

describe('API Tests for Add Books Requests', () => {
	test('Test4: To Add a Book', async () => {
		 const responseAuth = await axios.post('https://demoqa.com/Account/v1/Login', 
					{
						"password": "Test1234!",
						"userName": "khrystyna_s"
					});
		const response = await axios.post('https://demoqa.com/BookStore/v1/Books', {
			"userId": responseAuth.data.userId,
			"collectionOfIsbns": [
				{
					"isbn": "9781449325862"
				}
			]
		}, {
			headers: {
				'Authorization': `Bearer ${responseAuth.data.token}`
			}
		});
		expect(response.status).toBe(201);
		expect(response.data.books).toHaveLength(1);
		expect(response.data.books[0].isbn).toBe('9781449325862');
	})
		
	test('Test5: To Add multiple Books', async () => {
		const responseAuth = await axios.post('https://demoqa.com/Account/v1/Login', 
					{
						"password": "Test1234!",
						"userName": "khrystyna_s"
					});
		const response = await axios.post('https://demoqa.com/BookStore/v1/Books', {
			"userId": responseAuth.data.userId,
			"collectionOfIsbns": [
				{
					"isbn": "9781593275846"
				},
				{
					"isbn": "9781593277574"
				}
			]
		}, {
			headers: {
				'Authorization': `Bearer ${responseAuth.data.token}`
			}
		});
		expect(response.status).toBe(201);
		expect(response.data.books).toHaveLength(2);
		expect(response.data.books[0].isbn).toBe('9781593275846');
		expect(response.data.books[1].isbn).toBe('9781593277574');
	})
})