const axios = require('axios');

test('Generate a token', async () => {
        const response = await axios.post('https://demoqa.com/Account/v1/Login', 
            {
                "password": "Test1234!",
                "userName": "khrystyna_s"
            });
        expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
    })