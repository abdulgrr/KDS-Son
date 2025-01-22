const SakatCezali = require('../model/sakatcezali');
const Oyuncu = require('../model/oyuncu');

// Form ile Veri Oluşturma
exports.createSakatCezali = async (req, res) => {
    try {
        const sakatCezali = await SakatCezali.create(req.body);
        res.status(201).send({ message: 'Sakat/Cezalı kaydı başarıyla oluşturuldu', data: sakatCezali });
    } catch (err) {
        console.error('Error creating Sakat/Cezalı record:', err); // Log the error
        res.status(500).send({ message: 'Sakat/Cezalı kaydı oluşturulurken bir hata oluştu', error: err.message });
    }
};

//Tüm Verileri Veritabanından çekip tabloya koyma
exports.getSakatCezali = async (req, res) => {
  try {
      const sakatCezaliList = await SakatCezali.findAll({
          include: [{ model: Oyuncu, as: 'Oyuncu', attributes: ['id', 'AdSoyad'] }]
      });
      res.json(sakatCezaliList);
  } catch (err) {
      res.status(500).send({ message: 'Sakat/Cezalı kayıtları getirilirken bir hata oluştu', error: err.message });
  }
};

// Tablodaki Güncelleme Butonu
exports.updateSakatCezali = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await SakatCezali.update(req.body, { where: { id } });
        if (updated) {
            const updatedSakatCezali = await SakatCezali.findOne({ where: { id } });
            res.status(200).send({ message: 'Sakat/Cezalı kaydı başarıyla güncellendi', data: updatedSakatCezali });
        } else {
            res.status(404).send({ message: `ID ${id} ile eşleşen bir kayıt bulunamadı.` });
        }
    } catch (err) {
        res.status(500).send({ message: 'Sakat/Cezalı kaydı güncellenirken bir hata oluştu', error: err.message });
    }
};

// Tablodaki Silme Butonu
exports.deleteSakatCezali = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await SakatCezali.destroy({ where: { id } });
        if (deleted) {
            res.status(200).send({ message: 'Sakat/Cezalı kaydı başarıyla silindi.' });
        } else {
            res.status(404).send({ message: `ID ${id} ile eşleşen bir kayıt bulunamadı.` });
        }
    } catch (err) {
        res.status(500).send({ message: 'Sakat/Cezalı kaydı silinirken bir hata oluştu', error: err.message });
    }
};
