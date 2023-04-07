/*
* app.js
* This file contains the base code needed to run the app including all middleware running on the app
* the app is exported so that it can be used in integration tests and the server
**/

const express = require('express');
const app = express();

app.use('/api/v1', require('./routes/routes'));

module.exports = app;