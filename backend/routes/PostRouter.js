const express = require('express');
const CreatePost = require('../Controllers/create_post');
const GetPost = require('../Controllers/getAllPost');
const DeletePost = require('../Controllers/delete_post');
const UpdatePost = require('../Controllers/update_post');
const userCreate = require('../Controllers/userCreate'); 
const getUpdate_post = require('../Controllers/userPosts');  
const auth = require('../middleware/auth');

const router = express.Router();
 
router.post('/register', userCreate);

router.post('/post', auth, CreatePost);
 
router.get('/posts', GetPost);
 
router.delete('/post/:id', auth, DeletePost);
 
router.patch('/post/:id', auth, UpdatePost);
 
router.get('/user/:id', auth, getUpdate_post);  

module.exports = router;
