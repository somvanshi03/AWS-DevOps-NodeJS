const express = require('express');
const app = express();
const port = 3001;  //define port

app.get('/', (req, res) => {
    res.send('Hello, Welcome to NodeJs');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});