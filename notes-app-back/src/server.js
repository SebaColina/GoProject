const app = require('./app');
const port = process.env.PORT || 3000;
//const dbConfig = require('./config/dbConfig');

// Database connection
//dbConfig.connect();

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
