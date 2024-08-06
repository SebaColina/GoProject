const app = require('./app');
const port = process.env.PORT || 8080;
const sequelize = require('./config/dbConfig');

// Database connection
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
