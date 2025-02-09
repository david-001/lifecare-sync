const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post(
  '/register',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.register
);

router.post('/login', usersController.login);

router.get('/profile', checkAuth, usersController.getProfile);

router.patch('/updateprofile/:uid', checkAuth, usersController.updateProfile);

router.patch('/updatepassword/:uid', checkAuth, usersController.updatePassword);

module.exports = router;
