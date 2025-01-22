const express = require('express');
const router = express.Router();
const tavsiyelerController = require('../controller/tavsiyelercontroller');

router.get('/tavsiyeler', tavsiyelerController.getAdviceLists);

module.exports = router;