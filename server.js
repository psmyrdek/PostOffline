const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const port = 3000;

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/posts', require('./posts'))

const server = http.createServer(app);

server.listen(port)

server.on('listening', () => {
    console.log(`
    ====================
    Listening on ${port}
    ====================
    `);
});

server.on('error', (error) => {
    console.log(error);
})