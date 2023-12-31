const jwt = require("jsonwebtoken");
const Secret = `${process.env.JWT_SECRET}`;

const authVerifyController = async (req, res) => {
    const Token = req.headers.authorization;

    const jwtToken = Token.split(" ")[1];
    console.log(jwtToken);

    if (!jwtToken) {
        return res.status(400).json({ error: "Unauthorized user!" });
    }

    try {
        // Verify the JWT token
        const authUser = await jwt.verify(jwtToken, Secret);

        if (authUser) {
            return res.status(200).json({ success: "Valid user" });
        } else {
            return res.status(400).json({ error: "Invalid user" });
        }
    } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(400).json({ error: "JWT verification failed" });
    }
}

module.exports = {
    authVerifyController
}
