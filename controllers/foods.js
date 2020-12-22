const db = require('../db');

exports.getAllFoods = (req, res) => {
  const sql = 'SELECT * FROM foods';
  db.query(sql, (err, food) => {
    if (err) throw err;
    res.json(food);
  });
};

exports.addNewFood = (req, res) => {
  const sql = `INSERT INTO foods (product_name, product_type, quantity, price) 
  VALUES ('${req.body.product_name}', '${req.body.product_type}', ${req.body.quantity}, ${req.body.price})`;
  db.query(sql, (err, food) => {
    if (err) {
      res.status(400).json({
        err: err,
        message: 'This food item could not be added',
      });
    } else {
      res.status(201).json({
        message: 'Food item has been successfully added',
      });
    }
  });
};
