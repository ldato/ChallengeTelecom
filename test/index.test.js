
const app = require('../app');
const request = require('supertest');

const messageRutaBase = "Ruta Base";

describe('GET/v1', () => {
    test('should respond with a status 200 code and string message', async () => {        
          const response = await request(app).get('/v1').send();
            expect(response.statusCode).toBe(200);
            expect(response._body.message).toEqual(messageRutaBase);
        })
});

