/* eslint-disable no-undef */
const axios = require('axios');
const BooksController = require('../controllers/BooksController');
const AccountController = require('../controllers/AccountController');
const books = require('../testData/books.json');
const users = require('../testData/users.json');

const axiosInstance = axios.create({
	baseURL: 'https://demoqa.com',
	validateStatus: () => true
});

describe('API Tests for GET Books Requests', () => {
	
	test('Test1: To Get All Books', async () => {
		const response = await BooksController.getAllBooks();
		expect(response.status).toBe(200);
		expect(response.data.books).toHaveLength(8);
	})
	
	test('Test2: To Get a Book by ISBN', async () => {
		const response = await BooksController.getBookByISBN('9781491904244');
		expect(response.status).toBe(200);
		expect(response.data.isbn).toBe('9781491904244');
		expect(response.data.title).toBe('You Don\'t Know JS');
		expect(response.data.subTitle).toBe('ES6 & Beyond');
		expect(response.data.author).toBe('Kyle Simpson');
	})
	
	test('Test3: To Get a Book by invalid ISBN', async () => {
		const response = await BooksController.getBookByISBN('97ddd81491904244');
		expect(response.status).toBe(400);
		expect(response.data.message).toBe('ISBN supplied is not available in Books Collection!');
	})
});

describe('API Tests for Add Books Requests', () => {
		
	let token;

	beforeAll(async () => {
		const response = await AccountController.login(users.user1.userName, users.user1.password);
		token = response.data.token;
		expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
	})

	test('Test4: To Add a Book', async () => {
		const response = await BooksController.addBook(users.user1.userId, books.data[0].isbn, token);
		expect(response.status).toBe(201);
		expect(response.data.books).toHaveLength(1);
		expect(response.data.books[0].isbn).toBe(books.data[0].isbn);
	})
		
	test('Test5: To Add multiple Books', async () => {
		const response = await BooksController.addMultipleBooks(users.user1.userId, [books.data[6].isbn, books.data[7].isbn], token);
		expect(response.status).toBe(201);
		expect(response.data.books).toHaveLength(2);
		expect(response.data.books[0].isbn).toBe(books.data[6].isbn);
		expect(response.data.books[1].isbn).toBe(books.data[7].isbn);
	})

	afterAll(async () => {
		const response = await BooksController.deleteBook(users.user1.userId, token);
		expect(response.status).toBe(204);
	})

})