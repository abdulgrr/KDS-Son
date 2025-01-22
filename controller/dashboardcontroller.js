const Oyuncu = require('../model/oyuncu'); 
const sequelize = require('sequelize');


//Genel Puan karşılaştırması için veri çekme
exports.getGenelPuanComparison = async (req, res) => {
    try {
        const takim1Players = await Oyuncu.findAll({
            attributes: ['GenelPuan'],
            where: { takim_id: 1 }
        });

        const otherTeamsPlayers = await Oyuncu.findAll({
            attributes: ['GenelPuan'],
            where: { takim_id: { [sequelize.Op.ne]: 1 } }
        });

        const takim1Avg = takim1Players.reduce((sum, player) => sum + player.GenelPuan, 0) / takim1Players.length;
        const otherTeamsAvg = otherTeamsPlayers.reduce((sum, player) => sum + player.GenelPuan, 0) / otherTeamsPlayers.length;

        res.json({
            takim1Avg: takim1Avg || 0,
            otherTeamsAvg: otherTeamsAvg || 0
        });
    } catch (error) {
        console.error('Error fetching Genel Puan comparison:', error);
        res.status(500).json({ error: 'Genel Puan karşılaştırması alınırken hata oluştu', details: error });
    }
};
