const { DataTypes } = require('sequelize');
const sequelize = require('../db/DBConfig'); // Veritabanı bağlantısı
const Oyuncu = require('./oyuncu');

// Moedli tanımlama
const SakatCezali = sequelize.define("SakatCezali", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
    },
    oyuncu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    durum: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    baslangictarihi: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    donustarihi: { 
        type: DataTypes.DATE,
        allowNull: false,
    },
    aciklama: { 
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'sakatcezali', // Tablo adı
    timestamps: false // Zaman damgalarını devre dışı bıraktık
});

// oyuncu tablosuyla ilişki eklendi
SakatCezali.belongsTo(Oyuncu, { foreignKey: 'oyuncu_id', as: 'Oyuncu' });
Oyuncu.hasMany(SakatCezali, { foreignKey: 'oyuncu_id', as: 'SakatCezaliKayitlari' });

module.exports = SakatCezali;
