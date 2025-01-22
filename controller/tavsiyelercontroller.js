const Oyuncu = require('../model/oyuncu');
const Takim = require('../model/takim');
const { Op } = require('sequelize');

// Get advice lists
exports.getAdviceLists = async (req, res) => {
    try {
        // Players whose contract ends on 2025-06-30 and team ID is 1
        const playersContractEnd2025 = await Oyuncu.findAll({
            where: {
                SozlesmeBit: new Date('2025-06-30'),
                takim_id: 1
                
            },
            attributes: ['AdSoyad']
        });

        // Players whose contract ends on 2026-06-30 and team ID is 1
        const playersContractEnd2026 = await Oyuncu.findAll({
            where: {
                SozlesmeBit: new Date('2026-06-30'),
                takim_id: 1
               
            },
            attributes: ['AdSoyad']
        });

        // Teams with a transfer budget less than 1,000,001
        const lowBudgetTeams = await Takim.findAll({
            where: {
                butce: {
                    [Op.lt]: 1000001
                }
            },
            attributes: ['isim']
        });

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