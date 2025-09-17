const express = require('express');
const talkerRoutes = require('./routes/talkerRoutes');

const app = express();

app.use(express.json());

app.use('/talkers', talkerRoutes);

module.exports = app;