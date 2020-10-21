const express = require('express');
const router  = express.Router();

const failureController = require('../controllers/failureController');

router.get('/', failureController.index);

module.exports = router;