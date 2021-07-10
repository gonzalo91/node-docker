const express = require('express')

const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, postController.getAllPosts).post(protect, postController.storePost);

module.exports = router;