const express = require('express');
const {APP_PORT} = require('./config')

const app = express();

const http = require('http');

let server = http.createServer(app);

require('./init')

server.listen(APP_PORT, () => {
    console.log('服务已经启用，端口号:'+APP_PORT);
});