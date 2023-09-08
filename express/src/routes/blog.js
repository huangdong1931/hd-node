const express = require('express');
const blog = express.Router();

const blogHandler = require('../controllers/blog');

blog.get('/list', blogHandler.getBlogList);

blog.get('/list/detail:id', blogHandler.getBlogListDetail);

blog.post('/add', blogHandler.addBlog);

blog.post('/update', blogHandler.updateBlog);

blog.post('/delete', blogHandler.deleteBlog);

module.exports = blog;