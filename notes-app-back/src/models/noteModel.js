// noteModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Note = sequelize.define('Note', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Note;
