const app = require('../app');
const request = require('supertest');

const cityOk = "Tokyo";
const cityWrong = "Tokio";

describe('GET//v1/forecaste/:city?', () => {
    test('should respond with a status 200 code and my forecast location weather information', async () => {
        const response = await request(app).get('/v1/forecast').send();
        expect(response.statusCode).toBe(200);
        expect(response._body).toBeInstanceOf(Object);
        expect(response._body.cod).toEqual("200");
        expect(response._body.list).toBeInstanceOf(Array);
    }, 10000);

    test('should respond with a status 200 code and my forecast param city weather information', async () => {
        const response = await request(app).get(`/v1/forecast/${cityOk}`).send();
        expect(response.statusCode).toBe(200);
        expect(response._body).toBeInstanceOf(Object);
        expect(response._body.cod).toEqual("200");
        expect(response._body.list).toBeInstanceOf(Array);
    }, 10000);

    test('should respond with a status 404 code and string message', async () => {
        const response = await request(app).get(`/v1/forecast/${cityWrong}`).send();
        expect(response.statusCode).toBe(404);
        expect(response._body).toEqual("No se encontro la ciudad");
    }, 10000);
});
