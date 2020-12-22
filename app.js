const express = require('express');
const app = express();

const foodRoutes = require('./routes/foodsRoutes');

app.use(express.json());

app.use('/api/food', foodRoutes);

module.exports = app;
