import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../assets/Instagram-priject.png'

const Login = ({ setIsAuth }) => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === formdata.email);

    if (!user) {
      Swal.fire("User Not Found", "Please register first", "error");
      return navigate("/");
    }

    if (user.password === formdata.password) {
      Swal.fire({
        title: "Welcome Back!",
        text: "Login Successful 🎉",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        localStorage.setItem("auth", true);
        setIsAuth(true);
        navigate("/homepage");
      });
    } else {
      Swal.fire("Oops!", "Wrong password ❌", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 font-sans">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#ffffff0f] border border-[#ffffff22] rounded-2xl p-8 shadow-2xl relative">

        <button
          onClick={() => navigate("/", { replace: true })}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#FF004F] transition"
          title="Close"
        >
          ×
        </button>

        <div className="text-center mb-6"> 
          <img src={logo} alt="Logo" className="h-15  mx-auto" />
          <h2 className="text-3xl font-extrabold text-white mt-2 tracking-wider">LOGIN</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-[#ffffff13] border border-[#ffffff33] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder-gray-300"
            required
          />
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-[#ffffff13] border border-[#ffffff33] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder-gray-300"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#00FFFF] hover:bg-[#00cccc] text-black font-bold py-2 rounded-lg shadow-md shadow-cyan-500/50 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
