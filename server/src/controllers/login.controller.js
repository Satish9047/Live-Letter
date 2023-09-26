const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/user.model");
Secret=`${process.env.JWT_TOKEN}`;

const loginController = async (req, res)=>{

    const {email, password}= req.body;
    console.log(req.body);

    const userExist = await User.findOne({email: email});
    if(!userExist){
        console.log("user doesn't exit");
        return res.status(400).json({error: "User doesn't exist!"});
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if(!passwordMatch){
        console.log("password doesn't match")
        return res.status(400).json({error: "password doen't match"});
    }
    console.log("good to go")
    const jwtToken = jwt.sign({email: email}, Secret, {expiresIn: "5h"});
    console.log(jwtToken);
    return res.cookie("jwt", jwtToken, {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
      }).status(200).json({ success: "You are welcome" });

}
module.exports = {
    loginController
}
