let router = require("express").Router();
let UserController = require("../controllers/user-controller");

router.route("/")
    .get(UserController.findAll)
    .post(UserController.create);

router.route("/:id")
    .get(UserController.getById)
    .put(UserController.update)
    .delete(UserController.delete);


module.exports = router;