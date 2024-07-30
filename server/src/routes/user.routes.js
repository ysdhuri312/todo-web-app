const express = require('express');
const { register, login, profile, logout } = require("../controllers/user.controller")

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").post(profile);
router.route("/logout").get(logout);

module.exports = router;

