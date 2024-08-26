const constant = {
    PORT: 3000,
    STATUS_NOT_FOUND: 404,
    STATUS_OK: 200,
    STATUS_SERVER_ERROR: 500,
    CONTENT_TYPE_HTML: {
        'Content-Type': 'text/html'
    },
}

Object.freeze(constant);

module.exports = {
    constant
}
