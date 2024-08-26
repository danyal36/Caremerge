const http = require('http');
const url = require('url');
const renderHtml = require('./helpers/renderHtml');
const { fetchTitleWithPromise } = require('./helpers/fetchTitle');
const { constant } = require('./config/constants')

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/I/want/title')) {
        const query = url.parse(req.url, true).query;
        const addresses = Array.isArray(query.address) ? query.address : [query.address];

        Promise.all(addresses.map(fetchTitleWithPromise))
            .then(titles => {
                res.writeHead(constant.STATUS_OK, { 'Content-Type': 'text/html' });
                res.end(renderHtml(titles));
            })
            .catch(() => {
                res.writeHead(constant.STATUS_SERVER_ERROR);
                res.end('Internal Server Error');
            });
    } else {
        res.writeHead(constant.STATUS_NOT_FOUND);
        res.end('404 Not Found');
    }
});

server.listen(constant.PORT, () => {
    console.log(`Server is running on port ${constant.PORT}`);
});
