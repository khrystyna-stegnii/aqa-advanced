/* eslint-disable no-undef */
const axios = require('axios');
const AccountController = require('../controllers/AccountController');
const users = require('../testData/users.json');

test('Generate a token', async () => {
        const response = await AccountController.login(users.user1.userName, users.user1.password);
        expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
    })

test('Generate a token with invalid credentials', async () => {
        const response = await AccountController.login(users.user2.userName, users.user2.password);
        expect(response.status).toBe(200);
        expect(response.data.token).toBeUndefined();
    
    })