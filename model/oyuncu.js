const { DataTypes } = require('sequelize');
const sequelize = require('../db/DBConfig'); // Veritabanı bağlantısı
const Takim = require('./takim'); // Takim modelini içe aktar

// Kadro modelini tanımla
const Oyuncu = sequelize.define("Oyuncu", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, // Primary key ekledik
    },
    AdSoyad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    GenelPuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Hiz: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Sut: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Pas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Dribl: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Def: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Fiz: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    Poz: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AltPoz: { 
        type: DataTypes.STRING,
        allowNull: true,
    },
    Yas: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Ulke: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    TransferDeg: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SozlesmeBit: { 
        type: DataTypes.DATE,
        allowNull: false,
    },
    takim_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        
        }
    }
, {
    tableName: 'oyuncu', // Tablo adı
    timestamps: false // Zaman damgalarını devre dışı bırak
});

// İlişkiyi tanımla
Oyuncu.belongsTo(Takim, { foreignKey: 'takim_id' });
Takim.hasMany(Oyuncu, { foreignKey: 'takim_id' });

module.exports = Oyuncu;