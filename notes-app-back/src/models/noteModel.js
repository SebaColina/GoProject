// noteModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Note',
  timestamps: false
});

module.exports = Note;
