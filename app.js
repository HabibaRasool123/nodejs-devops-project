const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

let visitors = 0;

app.get('/', (req, res) => {
    visitors++;

    res.send(`
        <h1>Devops CI/CD Project</h1>
        <p><strong>Timestamp:</strong> ${new Date()}</p>
        <p><strong>Container ID:</strong> ${os.hostname()}</p>
        <p><strong>Visitors:</strong> ${visitors}</p>
    `);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
