const express = require('express');
const os = require('os');

const app = express();
const port = process.argv[2] || 3000;

app.get('/', (req, res) => {
    res.send(`Welcome to ${port} ,hostname: ${os.hostname()}`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});