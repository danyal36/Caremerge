const request = require('request');
const requestPromise = require('request-promise');

// Callback-based function
function fetchTitleWithAsyncCallback(address, callback) {
    // Ensure address starts with http:// or https://
    if (!/^https?:\/\//i.test(address)) {
        address = 'http://' + address;
    }

    request(address, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            callback(null, `${address} - NO RESPONSE`);
        } else {
            const match = body.match(/<title>([^<]*)<\/title>/);
            callback(null, `${address} - "${match ? match[1] : 'No title found'}"`);
        }
    });
}

// Callback-based function
function fetchTitleWithPlainCallback(address, callback) {
    // Ensure address starts with http:// or https://
    if (!/^https?:\/\//i.test(address)) {
        address = 'http://' + address;
    }

    request(address, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            callback(`${address} - NO RESPONSE`);
        } else {
            const match = body.match(/<title>([^<]*)<\/title>/);
            callback(`${address} - "${match ? match[1] : 'No title found'}"`);
        }
    });
}

// Promise-based function
function fetchTitleWithPromise(address) {
    // Ensure address starts with http:// or https://
    if (!/^https?:\/\//i.test(address)) {
        address = 'http://' + address;
    }

    return requestPromise(address)
        .then(body => {
            const match = body.match(/<title>([^<]*)<\/title>/);
            return `${address} - "${match ? match[1] : 'No title found'}"`;
        })
        .catch(() => `${address} - NO RESPONSE`);
}

module.exports = {
    fetchTitleWithAsyncCallback,
    fetchTitleWithPlainCallback,
    fetchTitleWithPromise
};