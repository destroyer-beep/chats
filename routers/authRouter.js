const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');

authRouter.post('/registration', authController.registration);
authRouter.post('/authorization', authController.authorization);

module.exports = authRouter;