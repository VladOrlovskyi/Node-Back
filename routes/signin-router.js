let router = require('express').Router();
let SignInController = require("../controllers/signin-controller");

router.get('/', SignInController.signIn);


module.exports = router;