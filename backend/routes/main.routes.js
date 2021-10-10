//Importing
const express = require('express');
const mainController = require('../controllers/main.controller');

const router = express.Router();

// EndPoints
// router.post('/',mainController.postUser);

router.get('/information', mainController.information);
router.patch('/loan', mainController.loan);
router.patch('/payments', mainController.payments);

module.exports = router;