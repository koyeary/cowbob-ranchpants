require('dotenv').config();
const express       = require('express');
const session       = require('express-session');
const path          = require('path');
const bodyParser    = require('body-parser');
const logger        = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('views', path.join(__dirname, 'views'));

//Set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require('./routes')(app);

//Listener
app.listen(PORT, () => {
    console.log(`Congratulations, you are listening on port ${PORT}!!!`);
});

