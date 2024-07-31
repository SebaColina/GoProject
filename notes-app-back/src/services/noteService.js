const Note = require('../models/noteModel');

exports.getAllNotes = async () => {
  return await Note.find();
};
