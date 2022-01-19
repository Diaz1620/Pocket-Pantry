const GroceryController = require('../controllers/grocery.controller');


module.exports = (app) => {
    app.get('/api/groceries',GroceryController.index);
    app.post('/api/groceries',GroceryController.create);
    app.get('/api/groceries/:id',GroceryController.show);
    app.put('/api/groceries/:id',GroceryController.update);
    app.delete('/api/groceries/:id',GroceryController.destroy);
} 