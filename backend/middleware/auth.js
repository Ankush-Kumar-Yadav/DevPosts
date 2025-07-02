const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try { 
        const token = req.header("authorization");
        if (!token) {
            return res.status(401).json({
                success: false,
                msg: "Please register first or log in",
            });
        }

        const isVerified = token.replace("Bearer ", "").trim();
        const decode = await jwt.verify(isVerified, "tarzen");
        console.log(decode)
        req.user = decode;
        
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({
            success: false,
            msg: "Please register first or log in",
        });
    }
};

module.exports = auth;