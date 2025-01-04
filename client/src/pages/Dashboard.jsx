import { useState, useEffect } from "react";
import axiosInstance from "../utilities/AxiosInstance";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: localStorage.getItem("userEmail") || "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/api/blogs", formData);
      setBlogs((prevBlogs) => [...prevBlogs, response.data.blog]);
      setFormData({ title: "", content: "", author: formData.author });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 border rounded"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              rows="5"
              className="w-full p-2 border rounded"
              value={formData.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Blog
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Your Blogs</h2>
        {blogs.length > 0 ? (
          blogs.map(
            (blog) =>
              blog && (
                <div
                  key={blog._id}
                  className="bg-white p-4 rounded shadow-md mb-4"
                >
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <p className="text-sm text-gray-700">By: {blog.author}</p>
                  <p className="text-gray-800 mt-2">{blog.content}</p>
                </div>
              )
          )
        ) : (
          <p className="text-gray-700">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
