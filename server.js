const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`WebEOC Integration running on port ${PORT}`);
});