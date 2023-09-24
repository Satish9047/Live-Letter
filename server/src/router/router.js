const express = require("express");
const router = express.Router();
const {registerController} = require("../controllers/register.controller");
const {loginController} = require("../controllers/login.controller");

router.post("/login", loginController);
router.post("/register", registerController);


module.exports= {router};