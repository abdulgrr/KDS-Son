const express = require('express');
const router = express.Router();
const sakatCezaliController = require('../controller/sakatcezalicontroller');
// form ile veri gönderme
router.post('/sakatcezali', sakatCezaliController.createSakatCezali);
// tabloya veri çekme
router.get('/sakatcezali', sakatCezaliController.getSakatCezali);
// Güncelleme butonu
router.put('/sakatcezali/:id', sakatCezaliController.updateSakatCezali);
// Silme Butomu
router.delete('/sakatcezali/:id', sakatCezaliController.deleteSakatCezali);

module.exports = router;
