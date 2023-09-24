const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/user.model");

const loginController = async (req, res)=>{

    const {email, password}= req.body;


}
module.exports = {
    loginController
}
