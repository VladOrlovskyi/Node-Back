let router = require("express").Router();

let ChatRouter = require("./chat-router");
let MessegeRouter = require("./messege-router");
let UserRouter = require("./user-router");
let SignInRouter = require('./signin-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');
let RegistrationRouter = require('./registration-router');


router.use("/chats", ChatRouter);
router.use("/messeges", MessegeRouter);
router.use("/users", UserRouter);
router.use("/signin", SignInRouter);
router.use("/login", LoginRouter);
router.use("/logout", LogoutRouter);
router.use("/register", RegistrationRouter);

module.exports = router;

