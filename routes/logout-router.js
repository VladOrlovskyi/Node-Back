let router = require('express').Router();
let LogoutController = require('../controllers/logout-controller');

router.get('/', LogoutController.logOuting);

module.exports = router;