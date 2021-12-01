const router = require("express").Router({ mergeParams: true });
const controller = require("./categories.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:categoryId").all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
