/**
 * nexioClient.js
 * This client object is in charge of the connection between my system and the Nexio system.
 */

const axios = require("axios");
class NexioClient {
    //username = user_9965c9e069ed469b9d76a6236d5ec141
    //password = apiKey_UDzw0JNQu22nJO
    constructor() {
        this.basicAuth = "Basic dXNlcl85OTY1YzllMDY5ZWQ0NjliOWQ3NmE2MjM2ZDVlYzE0MTphcGlLZXlfVUR6dzBKTlF1MjJuSk8="
    }

    async heartbeat() {
        try {
            let response = await axios.get("https://api.nexiopaysandbox.com/user/v3/account/whoAmI", {
                headers: {
                    "Authorization": this.basicAuth,
                    "Accept": "application/json"
                }
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }

    async transactions() {
        try {
            let response = await axios.get("https://api.nexiopaysandbox.com/transaction/v3?limit=10&offset=0&currencyId=840", {
                headers: {
                    "Authorization": this.basicAuth,
                    "Accept": "application/json"
                }
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }

    async process(body) {
        try {
            let response = await axios({
                method: 'post',
                url: "https://api.nexiopaysandbox.com/pay/v3/process",
                data: body,
                headers: {
                    "Authorization": this.basicAuth,
                    "Accept": "application/json",
                    "content-type": "application/json"
                },
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }
}

module.exports = NexioClient;