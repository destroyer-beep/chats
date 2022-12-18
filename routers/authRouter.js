const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');

router.post('/reg', authController.reg);
router.post('/auth', authController.auth);
router.get('/user', authController.getUser);

module.exports = router;