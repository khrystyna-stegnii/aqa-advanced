const axios = require('axios');

class BooksController {

    constructor(){
     this.axiosInstance = axios.create({
        baseURL: 'https://demoqa.com',
        validateStatus: () => true
 })
    }

    async getAllBooks(){
      return await this.axiosInstance.get('/BookStore/v1/Books');
    }

    async getBookByISBN(isbn){ 
        return await this.axiosInstance.get(`/BookStore/v1/Book?ISBN=${isbn}`);
    }

    async addBook(userId, isbn, token){
        return await this.axiosInstance.post('/BookStore/v1/Books', {
			userId,
			"collectionOfIsbns": [
				{
					isbn
				}
			]
		}, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
    }
    async addMultipleBooks(userId, isbns, token){
        const collectionOfIsbns = isbns.map(isbn => ({ isbn }));
        return await this.axiosInstance.post('/BookStore/v1/Books', {
            userId,
            collectionOfIsbns
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    async deleteBook(userId, token) {
        return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {    
            headers: {
                'Authorization': `Bearer ${token}`
            }
    })
    }
}

module.exports = new BooksController();