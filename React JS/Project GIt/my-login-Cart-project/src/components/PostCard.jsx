import React, { useState } from 'react';
import { FaAlignJustify, FaHeart, FaShareAlt, FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostCard = ({ post, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [likes, setLikes] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLike = () => setLikes((prev) => prev + 1);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      // 🟢 Make sure the post has a valid ID
      if (!post.id) {
        alert("Invalid post ID");
        return;
      }

      // 🔥 Send DELETE request to JSON Server
      await axios.delete(`http://localhost:3000/posts/${post.id}`);
      onDelete(post.id);
      console.log("✅ Deleted post with ID:", post.id);
    } catch (error) {
      console.error("❌ Delete failed:", error.message);
      alert("Delete failed: Post not found or already deleted.");

      // Still remove from UI in case it's already removed in backend
      onDelete(post.id);
    }
  };

  const handleEdit = () => {
    navigate(`/editpost/${post.id}`);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto hover:shadow-xl transition mt-20">
      {/* 3-dot menu */}
      <div className="absolute top-2 right-2">
        <button
          onClick={toggleMenu}
          className="text-white text-xl bg-black/60 rounded p-1 w-10 h-8 flex justify-center items-center"
        >
          <FaAlignJustify />
        </button>

        {showMenu && (
          <div className="absolute right-3 top-10 w-28 bg-white/70 backdrop-blur-md border border-gray-300 rounded shadow-md z-10">
            <button
              onClick={() => { setShowMenu(false); handleEdit(); }}
              className="w-full text-left px-4 py-2 hover:bg-gray-200 text-sm"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => { setShowMenu(false); handleDelete(); }}
              className="w-full text-left px-4 py-2 hover:bg-gray-200 text-sm text-red-500"
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>

      {/* Profile and username */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.profile || "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=default"}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
        />
        <span className="font-semibold text-gray-800">{post.username || "Unknown"}</span>
      </div>

      {/* Post image */}
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded" />

      {/* Post content */}
      <h2 className="text-xl font-bold mt-2 capitalize">{post.title}</h2>
      <p className="text-sm text-gray-600 mt-1 line-clamp-4">{post.content}</p>
      <p className="text-sm font-bold mt-2 text-gray-500">
        Category: {post.category || "N/A"}
      </p>

      {/* Footer icons */}
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <button onClick={toggleLike} className="flex items-center gap-1 hover:text-red-500">
          <FaHeart /> {likes}
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500">
          <FaRegCommentDots /> Comment
        </button>
        <button className="flex items-center gap-1 hover:text-green-500">
          <FaShareAlt /> Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;
