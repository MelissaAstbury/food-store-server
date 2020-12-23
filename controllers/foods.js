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

exports.updateFood = (req, res) => {
  const { product_name, product_type, quantity, price } = req.body;
  const sql = `UPDATE foods SET product_name='${product_name}', product_type='${product_type}', quantity=${quantity}, price=${price} WHERE id=${req.params.id}`;
  db.query(sql, (err, food) => {
    if (err) throw err;
    res.status(200).json({
      message: 'The specified food has been updated accordingly',
    });
  });
};

exports.deleteFood = (req, res) => {
  const sql = `DELETE FROM foods WHERE id=${req.params.id}`;
  db.query(sql, (err, food) => {
    if (err) throw err;
    if (food.affectedRows === 0) {
      res.status(202).json({
        message: 'There was nothing to delete',
      });
    } else {
      res.status(202).json({
        message: 'The specified food has been deleted',
      });
    }
  });
};

exports.calculateBasket = async (req, res) => {
  const requestedItems = req.body;
  const chosenIds = [];
  requestedItems.forEach((request) => {
    chosenIds.push(request.id);
  });
  try {
    const results = await db.query(
      `SELECT * FROM foods WHERE id=${requestedItems[0].id}`
    );
    results.forEach((item) => {
      // if (item.id === requestedItems[0]) {}
      // if (item.quantity - requestedItems[0].quantity < 0) {}
    });

    // Just to end the request gracefully
    res.status(200).json({
      message: 'Stock Updated',
    });
  } catch {
    res.status(400).json({
      message: 'Error Finding Item in Database',
    });
  }

  // const matches = [];
  // try {
  //   const stock = await db.query('SELECT * FROM foods');
  //   chosenFoods.forEach((singleItem) => {
  //     console.log(singleItem);
  //     for (item of stock[0]) {
  //       if (item.id === singleItem.id) {
  //         if (item.quantity - singleItem.quantity < 0) {
  //           return res.status(400).json({
  //             message: 'Not enough stock available',
  //           });
  //         }
  //         matches.push(singleItem);
  //       }
  //     }
  //   });
  //   if (matches.length === 0) {
  //     return res.status(400).json({
  //       message: 'Could not find items in Batabase',
  //     });
  //   }
  // } catch {
  //   res.status(400).json({
  //     message: 'Could not find items in Database',
  //   });
  // }

  // console.log(chosenFoods);
  // const itemsRequested = stock[0].map((item) => {
  // if (item.id =)
  // });

  // else {
  //   const newQty = item.quantity - singleItem.quantity;
  //   const sql = `UPDATE foods SET quantity=${newQty} WHERE id=${singleItem.id}`;
  //   db.query(sql, (err, item) => {
  //     if (err) throw err;
  //     res.status(400).json({
  //       message: 'Updated',
  //     });
  //   });
  // }

  //////////////////////////////////////

  // console.log(availableStock);
  // console.log(availableStock, 'available');
  // console.log(outOfStock, 'out of stock');
  // if (outOfStock.length > 0) {
  //   res.status(400).json({
  //     message: 'Not enough stock available',
  //   });
  // } else {
  //   availableStock.forEach((item) => {
  //     const newQty = item[0].quantity - food.quantity;
  //     const sql = `UPDATE foods SET quantity=${newQty} WHERE id=${food.id}`;
  //     db.query(sql, (err, item) => {
  //       if (err) throw err;
  //     });
  //   });
  //   res.status(200).json({
  //     message: 'Updated!',
  //   });
  // }
};
