const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());  // Use cors middleware

// Routes
app.use('/', noteRoutes);

module.exports = app;
