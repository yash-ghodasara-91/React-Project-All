import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Pagesh/SignUp";
import Desboard from "./Pagesh/Desboard";
import Login from "./Pagesh/Login";
import AddTask from "./Components/AddTask.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desboard" element={<Desboard />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<AddTask />} />
      </Routes>
    </>
  );
};

export default App;
