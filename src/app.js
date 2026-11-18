const express = require('express');

function createApp() {
  const app = express();

  // Главная страница
  app.get('/', (req, res) => {
    res.status(200).send('KT3 App');
  });

  // Проверка состояния
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return app;
}

module.exports = { createApp };