const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/', noteRoutes);

//app.get('/', (req, res) => {
//  res.send('Welcome to the Notes API');
//});

module.exports = app;
