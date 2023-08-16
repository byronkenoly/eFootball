const express = require('express');
const path = require('path');

const app = express();

const PORT = 5002;

app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.html'));
});

app.listen(PORT, () => {
    console.log(`efootball running on port ${PORT}`);
});