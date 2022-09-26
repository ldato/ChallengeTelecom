const app = require('../app');
const request = require('supertest');

describe('GET/v1/location', () => {
    test('should respond with a status 200 code and my location information', async () => { 
        const response = await request(app).get('/v1/location').send();
        expect(response.statusCode).toBe(200);
        expect(response._body).toBeInstanceOf(Object);
        
    }, 10000)
});
