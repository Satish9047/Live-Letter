const bcrypt = require("bcrypt");
const {User} = require("../models/user.model");
const saltRounds = 5;

const registerController = async (req, res)=>{
    const {userName, email, password}=req.body;
    

    const userExist = await User.findOne({email: email});
    if(userExist){
        return res.status(400).json({error: "Already have account"});
    }
    const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        email,
        userName,
        password: hash,
    })
    await newUser.save();
    console.log(email, "user is created")
    return res.status(201).json({msg: "User Created"});
    

}


module.exports= {
    registerController
}