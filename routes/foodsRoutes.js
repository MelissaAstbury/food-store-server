const express = require('express');
const router = express.Router();

const {
  getAllFoods,
  addNewFood,
  updateFood,
  deleteFood,
} = require('../controllers/foods');

router.get('/', getAllFoods);
router.post('/', addNewFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;
