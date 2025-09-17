const express = require('express');
//const peopleRoutes = require('./routes/talkerRoutes');

const app = express();

app.use(express.json());

//app.use('/talker', peopleRoutes);

module.exports = app;