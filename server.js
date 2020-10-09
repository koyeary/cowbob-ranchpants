const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

//const mailRoutes = require('./routes/mailRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//app.use('/mail', mailRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Congratulations, you are listening on port ${PORT}!!!`);
});