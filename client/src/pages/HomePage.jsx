import { useEffect, useState } from "react";
import axiosInstance from "../utilities/AxiosInstance";
import CommentSection from "../components/Comments";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/api/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <br />
      <br />
      <section
        id="home"
        className="bg-gradient-to-r from-slate-300 to-gray-700 text-white text-center py-32"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to RR-Coder</h2>
        <p className="text-lg mb-6">
          Explore the world of coding through engaging blogs and tutorials!
        </p>
        <a
          href="#blogs"
          className="px-6 py-3 bg-white text-slate-600 rounded-lg font-semibold hover:bg-gray-200"
        >
          Discover Blogs
        </a>
      </section>

      <section id="blogs" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading blogs...</p>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {blog.content.slice(0, 100)}...
                    </p>
                    <a
                      href={`/blogs/${blog._id}`}
                      className="text-gray-500 hover:underline font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No blogs found.</p>
          )}
        </div>
      </section>
      <CommentSection></CommentSection>
    </div>
  );
};

export default HomePage;
