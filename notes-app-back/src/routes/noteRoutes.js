const express = require('express');
const noteController = require('../controllers/noteController');

const noteRoutes = express.Router();

noteRoutes.get('/notes', noteController.getAllNotes);

module.exports = noteRoutes;
