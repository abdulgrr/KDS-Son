const express = require('express');
const router = express.Router();
const kadroController = require('../controller/kadrocontroller');

// Takım ID'si 1 olan tüm kadro bilgilerini getir
router.get('/', kadroController.getKadroByTakimId);

// Belirli bir oyuncuyu güncelle
router.put('/:id', kadroController.updateOyuncu);

// Belirli bir oyuncuyu sil
router.delete('/:id', kadroController.deleteOyuncu);

module.exports = router;