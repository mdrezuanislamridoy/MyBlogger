/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axiosInstance from "../utilities/AxiosInstance";
import user from "../assets/user.jpeg";

const Profile = ({ setIsLoggedIn }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        const response = await axiosInstance.get(`/api/auth/user/${email}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchThisUserBlog = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        const response = await axiosInstance.get(`/api/blogs/${email}`);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchThisUserBlog();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-lg max-w-md">
        <div className="flex items-center space-x-4">
          <img
            src={user}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-bold">{userInfo.fullName}</h1>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <p>
            <strong>Join Date:</strong>{" "}
            {new Date(userInfo.joinDate).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Log Out
        </button>
      </div>
      <br />
      <h2 className="text-2xl font-bold mb-2">My Blogs:</h2>
      <div className="h-[500px] overflow-scroll px-4">
        <br />
        {blogs.length > 0 ? (
          blogs.map(
            (blog) =>
              blog && (
                <div
                  key={blog._id}
                  className="bg-white p-4 rounded shadow-md mb-4 w-96 mt-2"
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

export default Profile;
