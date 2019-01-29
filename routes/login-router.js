let router = require('express').Router();
let LoginController = require('../controllers/login-controller');
require('../config/passport');
let passport = require('passport');

router.post('/', passport.authenticate('local.login', {failureRedirect: '/'}), LoginController.logining);

module.exports = router;