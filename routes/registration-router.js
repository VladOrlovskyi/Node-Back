let router = require('express').Router();
let RegistrationController = require('../controllers/registration-controller');
require('../config/passport');
let passport = require('passport');

router.post('/', passport.authenticate('local.register', {failureRedirect: '/'}), RegistrationController.registr);

module.exports = router;
