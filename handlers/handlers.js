/**
 * handlers.js
 * This file exports all the code to handle incoming requests
 * This is where any validation on the request body would be performed
 */
const NexioClient = require("../client/nexioClient");

module.exports.heartbeat = (request, response) => {
    //return 200 along with a happy message
    response.send('happy heartbeat!');
}

module.exports.nexioHeartbeat = async (request, response) => {
    let client = new NexioClient();
    let nexioResponse = await client.heartbeat();
    response.send(nexioResponse);
}

module.exports.transactions = async (request, response) => {
    let client = new NexioClient();
    let nexioResponse = await client.transactions();
    response.send(nexioResponse);
}

module.exports.process = async (request, response) => {
    let client = new NexioClient();
    let nexioResponse = await client.process(request.body);
    response.send(nexioResponse);
}