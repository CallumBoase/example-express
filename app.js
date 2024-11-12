// Import required modules
const express = require('express');

// Create Express app instance
const app = express();

// Define port
const port = 3000;

// Create API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello world" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});