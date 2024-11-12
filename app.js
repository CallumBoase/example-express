const express = require('express');
const app = express();

// Use environment port or default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/hello', async (req, res) => {
    // 30 seconds delay
    await new Promise(resolve => setTimeout(resolve, 30000));
    res.json({ message: "Hello world api hello", "time": `${new Date().toString()}` });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});