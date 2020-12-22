const db = require('../db');

exports.getAllFoods = (req, res) => {
  const sql = 'SELECT * FROM foods';
  db.query(sql, (err, food) => {
    if (err) throw err;
    res.json(food);
  });
};
