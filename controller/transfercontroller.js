const Oyuncu = require('../model/oyuncu');
const { Op } = require('sequelize');

// Filter players based on criteria
exports.filterPlayers = async (req, res) => {
    try {
        const { minGenelPuan, maxGenelPuan, minYas, maxYas, minHiz, minSut, minPas, minDef, minDribl, minFiz, maxTransferDeg } = req.body;

        const criteria = {};
        if (minGenelPuan) criteria.GenelPuan = { [Op.gte]: minGenelPuan };
        if (maxGenelPuan) criteria.GenelPuan = { ...criteria.GenelPuan, [Op.lte]: maxGenelPuan };
        if (minYas) criteria.Yas = { [Op.gte]: minYas };
        if (maxYas) criteria.Yas = { ...criteria.Yas, [Op.lte]: maxYas };
        if (minHiz) criteria.Hiz = { [Op.gte]: minHiz };
        if (minSut) criteria.Sut = { [Op.gte]: minSut };
        if (minPas) criteria.Pas = { [Op.gte]: minPas };
        if (minDef) criteria.Def = { [Op.gte]: minDef };
        if (minDribl) criteria.Dribl = { [Op.gte]: minDribl };
        if (minFiz) criteria.Fiz = { [Op.gte]: minFiz };
        if (maxTransferDeg) criteria.TransferDeg = { [Op.lte]: maxTransferDeg };

        const players = await Oyuncu.findAll({ where: criteria });
        res.json(players);
    } catch (err) {
        res.status(500).send({ message: 'Oyuncular filtrelenirken bir hata oluştu', error: err.message });
    }
};