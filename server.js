const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Test, test, test...Is this working?');
})

module.exports = server;