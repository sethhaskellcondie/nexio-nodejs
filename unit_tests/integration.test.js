const app = require('../app');
const request = require('supertest');

test('happy heartbeat endpoint', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.statusCode).toBe(200);
});

//this test keeps timing out
test('nexio api test', async () => {
    const response = await request(app).get('/api/v1/nexioHeartbeat');
    expect(response.statusCode).toBe(200);
});