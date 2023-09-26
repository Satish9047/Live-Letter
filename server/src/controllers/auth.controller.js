const jwt = require("jsonwebtoken");

const authVerifyController = (req, res)=>{
    console.log('Cookies: ', req.headers.cookie)
    return res.status(200).json({success: "Got the cookies"});
}

module.exports = {
    authVerifyController
}