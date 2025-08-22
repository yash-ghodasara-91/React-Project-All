import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/SignUp";
import Desboard from "./Pages/Desboard";
import Login from "./Pages/Login";
import TaskForm from "./Pages/TaskForm";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desboard" element={<Desboard />} />
        <Route path="/taskform" element={<TaskForm/>}></Route>
      </Routes>
    </>
  );
};

export default App;
