const app = require('./app');
const port = process.env.PORT || 3000;
//const dbConfig = require('./config/dbConfig');

// Database connection
//dbConfig.connect();

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
