const express = require("express");
const { getBlogs, addBlog } = require("../controller/BlogController");

const BlogRoute = express.Router();

BlogRoute.get("/", getBlogs);
BlogRoute.post("/", addBlog);

module.exports = BlogRoute;
