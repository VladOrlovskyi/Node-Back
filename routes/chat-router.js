let router = require("express").Router();
let ChatController = require("../controllers/chat-controller");

router.route("/")
    .get(ChatController.findAll)
    .post(ChatController.create);

router.route("/:id")
    .get(ChatController.getById)
    .put(ChatController.update)
    .delete(ChatController.delete);

module.exports = router;

