const express = require("express");
const {
  getBlogs,
  addBlog,
  getMyBlogs,
} = require("../controller/BlogController");

const BlogRoute = express.Router();

BlogRoute.get("/", getBlogs);
BlogRoute.post("/", addBlog);
BlogRoute.get("/:email", getMyBlogs);

module.exports = BlogRoute;
