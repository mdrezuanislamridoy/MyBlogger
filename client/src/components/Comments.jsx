import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ridoy Rahman",
      text: "This is a great article! Keep up the good work.",
      date: "January 3, 2025",
    },
    {
      id: 2,
      name: "Ayesha Karim",
      text: "Very informative post. Learned a lot!",
      date: "January 2, 2025",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      text: "Looking forward to your next blog!",
      date: "January 1, 2025",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: "Guest User",
          text: newComment,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">{comment.name}</h4>
            <p>{comment.text}</p>
            <span className="text-sm text-gray-500">
              Posted on: {comment.date}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
