const http = require('http');
const url = require('url');
const renderHtml = require('./helpers/renderHtml');
const { fetchTitleWithPlainCallback } = require('./helpers/fetchTitle');
const { constant } = require('./config/constants')

// Handler for the /I/want/title route
function handleTitleRequest(req, res) {
    const query = url.parse(req.url, true).query;
    const addresses = Array.isArray(query.address) ? query.address : [query.address];

    if (!addresses || addresses.length === 0) {
        res.writeHead(constant.STATUS_OK, constant.CONTENT_TYPE_HTML);
        res.end('<h1>No addresses provided</h1>');
        return;
    }

    let titles = [];
    let completedRequests = 0;

    addresses.forEach((address, index) => {
        fetchTitleWithPlainCallback(address, (title) => {
            titles[index] = title;
            completedRequests++;

            if (completedRequests === addresses.length) {
                res.writeHead(constant.STATUS_OK, constant.CONTENT_TYPE_HTML);
                res.end(renderHtml(titles));
            }
        });
    });
}

// Request Listener
function onRequest(req, res) {
    if (req.url.startsWith('/I/want/title')) {
        handleTitleRequest(req, res);
    } else {
        res.writeHead(constant.STATUS_NOT_FOUND, constant.CONTENT_TYPE_HTML);
        res.end('<h1>404 Not Found</h1>');
    }
}

// Create and start the server
const server = http.createServer(onRequest);

server.listen(constant.PORT, () => {
    console.log(`Server is running on port ${constant.PORT}`);
});