const router = require("express").Router();
const userController = require("../controller/userController");

// POST /v1/user - Thêm người dùng mới
router.post("/register", userController.adduser);
router.post("/login", userController.getuser);

module.exports = router;