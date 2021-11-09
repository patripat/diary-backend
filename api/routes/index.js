var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlPost = require('../controllers/post');
// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//post
router.post('/getpost', ctrlPost.getPosts);
router.post('/sendpost', ctrlPost.sendPost);
router.delete('/deletepost/:id', ctrlPost.deletePost);
router.put('/updatestatus/:id', ctrlPost.updateStatus);
router.put('/updatepost', ctrlPost.updatePost);
module.exports = router;
