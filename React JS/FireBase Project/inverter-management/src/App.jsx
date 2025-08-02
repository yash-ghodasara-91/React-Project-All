import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Pagesh/SignUp";
import Desboard from "./Pagesh/Desboard";
import Login from "./Pagesh/Login";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desboard" element={<Desboard />} />
      </Routes>
    </>
  );
};

export default App;
