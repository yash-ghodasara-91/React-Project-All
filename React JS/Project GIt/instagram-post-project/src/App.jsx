import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';


const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/homepage" element={<Home />} />
    </Routes>
  );
};

export default App;
