const express = require('express');
const noteController = require('../controllers/noteRoutes');

const router = express.Router();

router.get('/', noteController.getAllNotes);

module.exports = router;
