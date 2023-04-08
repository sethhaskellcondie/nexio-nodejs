/**
 * routes.js
 * This file contains all the routes accessible in this project
 * The handler for each route is found in the handlers file
 */

const express = require('express');
const router = express.Router();
const handlers = require('../handlers/handlers');


router.get('/', handlers.heartbeat);
router.get('/nexioHeartbeat', handlers.nexioHeartbeat);
router.get('/transactions', handlers.transactions);
router.post('/process', handlers.process);

module.exports = router;