const sequelize = require('../config/dbConfig');
const note = require('../models/noteModel');

exports.getAllNotes = async () => {
  try {
    const notes = await note.findAll(); // Fetch all notes from the database
    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

exports.createNote = async (title, content) => {
  try {
    const result = await note.create({title, content});
    return { id: result.insertId, title, content };
  } catch (error) {
    throw new Error('Error creating note: ' + error.message);
  }
};