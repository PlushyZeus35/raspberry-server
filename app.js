const express = require('express');
const path = require('path')

// INITIALIZATIONS
const app = express();


// SETTINGS
// Set static path to serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

// MIDDLEWARES

// GLOBAL VARIABLES

// ROUTES
app.use(require('./routes'));
app.use(require('./routes/index'));


module.exports = app;