const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardcontroller');

router.get('/genelPuanComparison', dashboardController.getGenelPuanComparison);

module.exports = router;