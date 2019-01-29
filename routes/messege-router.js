let router = require("express").Router();
let MessegeController = require("../controllers/messege-controller");

router.route("/")
    .get(MessegeController.findAll)
    .post(MessegeController.create);

router.route("/:id")
    .get(MessegeController.getById)
    .put(MessegeController.update)
    .delete(MessegeController.delete);


module.exports = router;