const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

const createPost = async (req, res) => {
    const userId = req.user.id;  
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required",
                success: false
            });
        }

        const newPost = new postModel({
            title: title,
            content: content
        });

        const fdata = await newPost.save();

        await userModel.findByIdAndUpdate(
            userId,
            { $push: { post: newPost } },
            { new: true }
        );

        res.status(201).json({
            message: "Post created successfully",
            fdata
        });
    } catch (error) {
        console.error("Error in createPost:", error);
        res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
};

module.exports = createPost;
