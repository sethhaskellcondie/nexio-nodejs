/**
* app.js
* This file contains the base code needed to run the app including all middleware running on the app.
* this app is exported so that it can be used in integration tests and the server
*/

const express = require('express');
const app = express();

//middleware to parse the body of a post request so that it can be used in this project
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', require('./routes/routes'));

module.exports = app;