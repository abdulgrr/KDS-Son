const express = require('express');
const router = express.Router();
const sakatCezaliController = require('../controller/sakatcezalicontroller');

router.post('/sakatcezali', sakatCezaliController.createSakatCezali);
router.get('/sakatcezali', sakatCezaliController.getSakatCezali);
router.put('/sakatcezali/:id', sakatCezaliController.updateSakatCezali);
router.delete('/sakatcezali/:id', sakatCezaliController.deleteSakatCezali);

module.exports = router;