const express = require('express');
const CreatePost = require('../Controllers/create_post');
const GetUserPost = require('../Controllers/getUserPost');
const DeletePost = require('../Controllers/delete_post');
const UpdatePost = require('../Controllers/update_post');
const userCreate = require('../Controllers/userCreate'); 
const getUpdate_post = require('../Controllers/userPosts');  
const auth = require('../middleware/auth');
const UserLogin = require('../Controllers/userlogin');
const getAllPosts = require('../Controllers/getAllposts');

const router = express.Router();
 
router.post('/register', userCreate);

router.post('/createpost', auth, CreatePost);

router.post('/login',UserLogin)
 

router.get('/getAllpost',getAllPosts)
 
router.get('/getuserpost/:id',auth, GetUserPost);
 
router.delete('/delete/:id', auth, DeletePost);
 
router.patch('/update/:id', auth, UpdatePost);
 
router.get('/user/:id', auth, getUpdate_post); 

module.exports = router;
