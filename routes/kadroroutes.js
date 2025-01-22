const express = require('express');
const router = express.Router();
const kadroController = require('../controller/kadrocontroller');

// Başakşehirli oyuncuların kadro bilgileri
router.get('/', kadroController.getKadroByTakimId);

// Güncelleme Butonu
router.put('/:id', kadroController.updateOyuncu);

//  Silme Butonu
router.delete('/:id', kadroController.deleteOyuncu);

module.exports = router;
