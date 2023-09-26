const express = require("express");
const router = express.Router();
const {registerController} = require("../controllers/register.controller");
const {loginController} = require("../controllers/login.controller");
const {authVerifyController} =  require("../controllers/auth.controller");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/authVerify", authVerifyController);

module.exports= {router};