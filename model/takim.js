const { DataTypes } = require('sequelize');
const sequelize = require('../db/DBConfig'); // Veritabanı bağlantısı

// Takim modelini tanımla
const Takim = sequelize.define("Takim", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, // Primary key ekledik
    },
    isim: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Puan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    butce: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'takim', // Tablo adı
    timestamps: false // Zaman damgalarını devre dışı bırak
});

module.exports = Takim;