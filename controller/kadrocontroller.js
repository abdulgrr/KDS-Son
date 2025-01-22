const Oyuncu = require('../model/oyuncu');

// Takım ID'si 1 olan tüm kadro bilgilerini getir
exports.getKadroByTakimId = async (req, res) => {
  try {
    const oyuncular = await Oyuncu.findAll({
      where: { takim_id: 1 }
    });
    res.json(oyuncular);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Belirli bir oyuncuyu güncelle
exports.updateOyuncu = async (req, res) => {
  try {
    const [updated] = await Oyuncu.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedOyuncu = await Oyuncu.findByPk(req.params.id);
      res.json(updatedOyuncu);
    } else {
      res.status(404).send({ message: 'Oyuncu bulunamadı' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Belirli bir oyuncuyu sil
exports.deleteOyuncu = async (req, res) => {
  try {
    const deleted = await Oyuncu.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Oyuncu bulunamadı' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};