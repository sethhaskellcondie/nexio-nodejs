/**
 * integration.test.js
 * This file contains all the different tests with the Nexio API system
 */
const app = require('../app');
const request = require('supertest');

test('happy heartbeat endpoint', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.statusCode).toBe(200);
});

test('nexio GET heartbeat test', async () => {
    const response = await request(app).get('/api/v1/nexioHeartbeat');
    //since we are returning the errors to the response, status OK (200) is always returned.
    expect(response.statusCode).toBe(200);
});

test('nexio GET transaction test', async () => {
    const response = await request(app).get('/api/v1/transactions');
    //since we are returning the errors to the response, status OK (200) is always returned.
    expect(response.statusCode).toBe(200);
});

test('nexio POST process test', async () => {
    let testObject = {
        "data": {
            "currency": "USD",
            "amount": 29.99
        },
        "paymentMethod": "card",
        "tokenex": {
            "token": "eb50a022-d6de-4244-a1e6-dcb8522b2d19"
        },
        "processingOptions": {
            "check3ds": false,
            "checkFraud": true,
            "saveCardToken": true,
            "retryOnSoftDecline": false,
            "shouldUseFingerprint": true,
            "verboseResponse": false
        },
        "shouldUpdateCard": true,
        "isAuthOnly": false
    };
    const response = await request(app).post('/api/v1/process').send({testObject});
    //since we are returning the errors to the response, status OK (200) is always returned.
    expect(response.statusCode).toBe(200);
});