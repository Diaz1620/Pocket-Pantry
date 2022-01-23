const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/users', authenticate, UserController.index);
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.delete('/api/logout', UserController.logout);
    app.get('/api/users/:id', UserController.show);
    app.put('/api/users/:id', UserController.update);
    app.delete('/api/users/:id', UserController.destroy);
}