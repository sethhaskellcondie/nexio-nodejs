// const sdk = require('api')('@nexio/v99#aku22ulf8nw8bx');
const axios = require('axios');

module.exports.heartbeat = (request, response) => {
    //return 200 along with a happy message
    response.send('happy heartbeat!');
}

module.exports.nexioHeartbeat = async (request, response) => {
    try {
        let returnJson = "";

        const nexioResponse = await axios.get("https://api.nexiopaysandbox.com/user/v3/account/whoAmI", {
            headers: {
                "Authorization": "Basic dXNlcl85OTY1YzllMDY5ZWQ0NjliOWQ3NmE2MjM2ZDVlYzE0MTphcGlLZXlfVUR6dzBKTlF1MjJuSk8=",
                "Accept": "application/json"
            }
        });
        returnJson = nexioResponse.data;
        response.send(returnJson);
    } catch (err) {
        console.error(err);
    }
}

module.exports.transactions = async (request, response) => {
    let returnJson = "";
    const nexioResponse = await axios.get("https://api.nexiopaysandbox.com/transaction/v3?limit=10&offset=0&currencyId=840", {
        headers: {
            "Authorization": "Basic dXNlcl85OTY1YzllMDY5ZWQ0NjliOWQ3NmE2MjM2ZDVlYzE0MTphcGlLZXlfVUR6dzBKTlF1MjJuSk8=",
            "Accept": "application/json"
        }
    });
    returnJson = nexioResponse.data;
    response.send(returnJson);
}