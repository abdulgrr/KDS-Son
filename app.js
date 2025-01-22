const express = require('express');
const path = require('path');
const sequelize = require('./db/DBConfig.js');
const kadroRoutes = require('./routes/kadroroutes.js');
const transferRoutes = require('./routes/transferroutes.js');
const sakatCezaliRoutes = require('./routes/sakatcezaliroutes.js');
const tavsiyelerRoutes = require('./routes/tavsiyelerroutes.js');
const dashboardRoutes = require('./routes/dashboardRoutes.js');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes kısmı
app.use('/kadro', kadroRoutes);
app.use('/', sakatCezaliRoutes);
app.use('/', transferRoutes);
app.use('/', tavsiyelerRoutes);
app.use('/api', dashboardRoutes);



app.get('/transfer', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'transfer.html'));
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı.');

    await sequelize.sync(); 
    console.log('Veritabanı senkronizasyonu tamamlandı.');
  } catch (err) {
    console.error('Veritabanı bağlantı/senkronizasyon hatası:', err);
  }
})();


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: { message: error.message },
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
