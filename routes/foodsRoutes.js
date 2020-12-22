const express = require('express');
const router = express.Router();

const { getAllFoods, addNewFood } = require('../controllers/foods');

router.get('/', getAllFoods);
router.post('/', addNewFood);

module.exports = router;
