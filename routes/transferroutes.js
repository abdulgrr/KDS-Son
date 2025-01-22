const express = require('express');
const router = express.Router();
const transferController = require('../controller/transfercontroller');

router.post('/transfer/filter', transferController.filterPlayers);


module.exports = router;