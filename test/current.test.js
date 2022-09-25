const app = require('../app');
const request = require('supertest');

const cityOk = "Paris";
const cityWrong = "Pari";

describe('GET//v1/current/city?', () => {
    test('should respond with a status 200 code and my current location weather information', async () => {
        const response = await request(app).get('/v1/current').send();
        expect(response.statusCode).toBe(200);
        expect(response._body).toBeInstanceOf(Object);
        expect(response._body.weather).toBeInstanceOf(Array);
    });

    test('should respond with a status 200 code and my current param city weather information', async () => {
        const response = await request(app).get(`/v1/current/${cityOk}`).send();
        expect(response.statusCode).toBe(200);
        expect(response._body).toBeInstanceOf(Object);
        expect(response._body.weather).toBeInstanceOf(Array);
    });
    
    test('should respond with a status 404 code and string message', async () => {
        const response = await request(app).get(`/v1/current/${cityWrong}`).send();
        expect(response.statusCode).toBe(404);
        expect(response._body).toEqual("No se encontro la ciudad");
        //expect(response._body).stringContaining("No se encontro la ciudad");
    });
});
