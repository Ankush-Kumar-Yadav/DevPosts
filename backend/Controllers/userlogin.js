const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User  not found" });  
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ id: user._id }, "tarzen", { expiresIn: '2h' });  
                res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true });  
                return res.status(200).json({ message: "Login successfully",token },
                    
                );  
            } else {
                return res.status(400).json({ message: "User  or password is not valid" });
            }
        }
    } catch (error) {
        console.log("Login error", error);
        return res.status(500).json({ message: "Internal server error" }); 
    }
};

module.exports = UserLogin;
