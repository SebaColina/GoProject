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
