module.exports = (titles) => {
    return `
        <html>
        <head></head>
        <body>
            <h1>Following are the titles of given websites:</h1>
            <ul>
                ${titles.map(title => `<li>${title}</li>`).join('')}
            </ul>
        </body>
        </html>
    `;
}