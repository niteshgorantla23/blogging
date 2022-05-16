const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog.controller');

// Retrieve all blogs
router.get('/', blogController.findAll);

// Create a new blog
router.post('/', blogController.create);

// Retrieve a single blog with id
router.get('/:id', blogController.findById);

// Update a blog with id
router.put('/:id', blogController.update);

// Delete a blog with id
router.delete('/:id', blogController.delete);

module.exports = router