// backend/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route for Work With Us form
router.post('/work-with-us', formController.handleWorkWithUsForm);

// Route for Get Work Done form
router.post('/get-work-done', formController.handleGetWorkDoneForm);

module.exports = router;