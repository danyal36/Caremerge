const http = require('http');
const url = require('url');
const async = require('async');
const renderHtml = require('./helpers/renderHtml');
const { fetchTitleWithAsyncCallback } = require('./helpers/fetchTitle');
const { constant } = require('./config/constants')

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/I/want/title')) {
        const query = url.parse(req.url, true).query;
        const addresses = Array.isArray(query.address) ? query.address : [query.address];

        async.map(addresses, fetchTitleWithAsyncCallback, (err, results) => {
            res.writeHead(constant.STATUS_OK, { 'Content-Type': 'text/html' });
            res.end(renderHtml(results));
        });
    } else {
        res.writeHead(constant.STATUS_NOT_FOUND);
        res.end('404 Not Found');
    }
});

server.listen(constant.PORT, () => {
    console.log(`Server is running on port ${constant.PORT}`);
});
