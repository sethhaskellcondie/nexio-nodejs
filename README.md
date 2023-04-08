# nexio-nodejs

This project contains a system that integrates with the Nexio payment processing platform.

System Project Set Up
* install node.js if that is not already install on your machine
     * https://nodejs.org/en/download 
     * test this by typing node into a command line if install correctly the message `Welcome no Nods.js <version>` will be displayed.
* clone this project to your machine
* open a command line window in the project directory
     * run the command `$ npm install`
     * this will create the node_modules directory in the project folder, then fill it with the dependencies for the project
     * run the command `$ npm start`
     * this will start the server the message `Server started on port 5000` will be displayed.
     * The system is now running you can test this by opening this address in your browser: http://localhost:5000/api/v1/

Development Project Set Up
* follow the System Set Up to get the project on your machine
* There are a few more commands that can be used to explore the system
* `$ npm devstart` will launch the server in nodemon so that the server doesn't need to be manually restarted
* `$ npm test` will run the automated integration tests found in integration.test.js
* `$ npm testOpen` will run the tests in Jest with the --detectOpenHandles, this helps determine when some async calls haven't been handled properly leading to broken tests. 
