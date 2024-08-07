const express = require('express');
const noteController = require('../controllers/noteController');

const noteRoutes = express.Router();

noteRoutes.get('/notes', noteController.getAllNotes);
noteRoutes.post('/notes', noteController.postNote);
noteRoutes.delete('/notes/:id', noteController.deleteNote);

module.exports = noteRoutes;
