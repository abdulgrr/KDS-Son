const Oyuncu = require('../model/oyuncu');
const Takim = require('../model/takim');
const { Op } = require('sequelize');

// Önerilen Eylemlerde Tablolara veri çekme
exports.getAdviceLists = async (req, res) => {
    try {
        // Sözleşmesi bitmek üzere olan Başakşehirli oyuncular
        const playersContractEnd2025 = await Oyuncu.findAll({
            where: {
                SozlesmeBit: new Date('2025-06-30'),
                takim_id: 1
                
            },
            attributes: ['AdSoyad']
        });

        // Sözleşmesi bir sonraki sezon sonu bitecek olan başakşehirli oyuncular.
        const playersContractEnd2026 = await Oyuncu.findAll({
            where: {
                SozlesmeBit: new Date('2026-06-30'),
                takim_id: 1
               
            },
            attributes: ['AdSoyad']
        });

        // Transfer Bütçesi Kısıtlı Takımlar
        const lowBudgetTeams = await Takim.findAll({
            where: {
                butce: {
                    [Op.lt]: 1000001
                }
            },
            attributes: ['isim']
        });

        // Başakşehirde yabancı kontenjanındaki en düşük reytingli 3 oyuncu
        const lowRatingForeignPlayers = await Oyuncu.findAll({
            where: {
                ulke: {
                    [Op.ne]: 'Turkey'
                },
                takim_id: 1
            },
            order: [['GenelPuan', 'ASC']],
            limit: 3,
            attributes: ['AdSoyad']
        });

        

        res.json({
            playersContractEnd2025,
            playersContractEnd2026,
            lowBudgetTeams,
            lowRatingForeignPlayers
        });
    } catch (err) {
        res.status(500).send({ message: 'Tavsiyeler getirilirken bir hata oluştu', error: err.message });
    }
};
