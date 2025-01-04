const Blog = require("../model/blogModel");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.addBlog = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.getMyBlogs = async (req, res) => {
  const email = req.params.email;
  if (!email) {
    res.status(500).json({ message: "User not found" });
  }
  const findBlogs = await Blog.find({ author: email });

  res.status(200).json({ blogs: findBlogs });
};
