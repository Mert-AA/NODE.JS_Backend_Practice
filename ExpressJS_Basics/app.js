const http = require("http");

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('hello!');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
});


const server = http.createServer(app);

server.listen(3002);

process.once('SIGKILL', () => {
    server.close(() => {
        process.exit(0);
    });
});
