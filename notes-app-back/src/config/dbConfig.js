// dbConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});

module.exports = sequelize;
