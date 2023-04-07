const express = require('express');
const router = express.Router();
const handlers = require('../handlers/handlers');

//heartbeat endpoints to test the connections with the api systems
router.get('/', handlers.heartbeat);
router.get('/nexioHeartbeat', handlers.nexioHeartbeat);

//one GET route to get the transactions for that card
router.get('/transactions', handlers.transactions);

//one POST route to run a credit card transaction
// router.post();

module.exports = router;