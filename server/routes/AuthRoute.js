const express = require("express");
const { signup, login, getUserInfo } = require("../controller/AuthController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user/:email", getUserInfo);

module.exports = router;
