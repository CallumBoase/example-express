const express = require('express');
const app = express();

// Use environment port or default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello world api hello" });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});