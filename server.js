/**
* server.js
* The server file contains the listener for the port this is seperated out so that supertest can
* run the app with its own port during integration testing.
*/

const app = require('./app');

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));