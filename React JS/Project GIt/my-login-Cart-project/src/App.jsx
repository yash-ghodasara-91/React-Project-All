import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import UserProfile from './pages/UserProfile';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import MyPost from './pages/MyPost';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = JSON.parse(localStorage.getItem("auth"));
    setIsAuth(authStatus); // set state
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/editpost/:id" element={<EditPost />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/myposts" element={<MyPost />} />
    </Routes>
  );
};

export default App;
