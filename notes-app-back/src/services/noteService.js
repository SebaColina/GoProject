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
    return result;
  } catch (error) {
    throw new Error('Error creating note: ' + error.message);
  }
};

exports.deleteNoteById = async (id) => {
  try {
    const result = await note.destroy({
      where: { id: id }
    })
    if (result === 0){
      throw new error('Note not found');
    }
    return result;
  } catch (error) {
    throw new Error('Error deleting note: ' + error.message);
  }
};