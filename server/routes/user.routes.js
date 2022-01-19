const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/users', UserController.index);
    app.post('/api/users', UserController.create);
    app.get('/api/users/:id', UserController.show);
    app.put('/api/users/:id', UserController.update);
    app.delete('/api/users/:id', UserController.destroy);
}