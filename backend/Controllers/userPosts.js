 
const userModel = require('../models/userModel');

const getUser_post = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await userModel.findById(userId).select('post')
            .populate({
                path: 'post',
                select: 'title content createdAt updatedAt'  
            });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User  not found"
            });
        }

        res.status(200).json({
            success: true,
             posts: user.post
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching user details",
            error: error.message
        });
    }
};

module.exports = getUser_post;
