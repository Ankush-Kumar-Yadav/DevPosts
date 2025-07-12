const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

const GetUserPost = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from auth middleware
        
        // Find the user and populate their posts
        const user = await userModel.findById(userId) 
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User  not found"
            });
        }

        res.status(200).json({
            success: true,
            posts: user.post,
            userDetails: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Error fetching user posts:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching user posts",
            error: error.message
        });
    }
};

module.exports = GetUserPost;
