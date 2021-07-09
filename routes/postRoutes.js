const express = require('express')

const postController = require('../controllers/postController')

const router = express.Router();

router.route('/').get(postController.getAllPosts).post(postController.storePost);

module.exports = router;