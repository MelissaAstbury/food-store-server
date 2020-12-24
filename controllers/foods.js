const db = require('../db');

exports.getAllFoods = async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM foods');
    res.json(results[0]);
  } catch {
    res.status(400).json({
      message: 'Error finding all items',
    });
  }
};

exports.addNewFood = async (req, res) => {
  try {
    const results = await db.query(`INSERT INTO foods (product_name, product_type, quantity, price) 
    VALUES ('${req.body.product_name}', '${req.body.product_type}', ${req.body.quantity}, ${req.body.price})`);
    res.json(results[0]);
  } catch {
    res.status(400).json({
      message: 'Error adding new item',
    });
  }
};

exports.updateFood = async (req, res) => {
  const { product_name, product_type, quantity, price } = req.body;
  try {
    const result = await db.query(
      `UPDATE foods SET product_name='${product_name}', product_type='${product_type}', quantity=${quantity}, price=${price} WHERE id=${req.params.id}`
    );
    res.json(result);
  } catch {
    res.status(400).json({
      message: 'Error updating the item',
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM foods WHERE id=${req.params.id}`
    );
    res.json(result);
  } catch {
    res.status(400).json({
      message: 'Error deleting the item',
    });
  }
};

exports.calculateBasket = (req, res) => {
  try {
    const results = [];
    req.body.forEach(async (item) => {
      const result = await db.query(`SELECT * FROM foods WHERE id=${item.id}`);
      results.push(result[0]);
    });

    console.log(results);
    res.status(200).json({
      message: 'Ok',
    });
  } catch (err) {
    res.status(403).json({
      message: err,
    });
  }
};

// console.log(chosenIds);
// try {
//   const results = await db.query(
//     `SELECT * FROM foods WHERE id=${requestedItems[0].id}`
//   );
//   results.forEach((item) => {
//     // if (item.id === requestedItems[0]) {}
//     // if (item.quantity - requestedItems[0].quantity < 0) {}
//   });

// Just to end the request gracefully
// res.status(200).json({
//   message: 'Stock Updated',
// });

////////////////////////

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
