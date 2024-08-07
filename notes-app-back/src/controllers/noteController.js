const noteService = require('../services/noteService');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Ensure title and content are provided
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newNote = await noteService.createNote(title, content);
    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};