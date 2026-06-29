const axios = require('axios');

class AccountController {

    constructor(){
     this.axiosInstance = axios.create({
        baseURL: 'https://demoqa.com',
        validateStatus: () => true
 })
    }
    async login(userName, password){
        return await this.axiosInstance.post('/Account/v1/Login', {
            userName,
            password
        });
    }
}

module.exports = new AccountController();