const express = require('express');
const router = express.Router();

const { getAllFoods } = require('../controllers/foods');

router.get('/', getAllFoods);

module.exports = router;
