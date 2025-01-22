const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bskshr_kds', 'root', '', {
    host: 'localhost',        // Veritabanı sunucusu
    port: 3306,               // MySQL varsayılan portu
    dialect: 'mysql',         // Dialect MySQL olarak ayarlanıyor
    logging:  console.log,           // SQL sorgularının console'da görünmesini istemiyorsanız false yapın
   
});

// Bağlantıyı test et
sequelize.authenticate()
    .then(() => {
        console.log('Veritabanı bağlantısı başarılı.');
    })
    .catch(err => {
        console.error('Veritabanına bağlanılamadı:', err);
    });

module.exports = sequelize;