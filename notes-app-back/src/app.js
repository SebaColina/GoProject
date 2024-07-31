const express = require('express');
const bodyParser = require('body-parser');
//const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
//app.use('/api/users', userRoutes);

app.get('/api/notes', (req, res) => {
    res.send('Hello World!');
  });

module.exports = app;
