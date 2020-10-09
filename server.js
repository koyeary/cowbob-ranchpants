const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Congratulations, you are listening on port ${PORT}!!!`);
});