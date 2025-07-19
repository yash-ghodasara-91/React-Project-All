import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const MyPost = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchUserPosts = async () => {
        try {
            const localUser = JSON.parse(localStorage.getItem("user"));
            if (!localUser) {
                alert("User not logged in!");
                return;
            }
            setUser(localUser);

            const res = await axios.get("http://localhost:3000/posts");
            const allPosts = res.data.reverse();

            const filteredPosts = allPosts.filter(post => post.username === localUser.username);
            setPosts(filteredPosts);

        } catch (err) {
            console.error("Failed to fetch posts:", err);
        }
    };

    useEffect(() => {
        fetchUserPosts();
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onDelete={fetchUserPosts}
                            onEdit={() => { }}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">You haven't posted anything yet.</p>
                )}
            </div>

            {/* 🔵 Back Button */}
            <div className="text-center mt-8">
                <button
                    onClick={() => navigate("/homepage")}
                    className="bg-gray-900 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded shadow"
                >
                    ⬅️ Back to Home
                </button>
            </div>
        </>
    );
};

export default MyPost;
