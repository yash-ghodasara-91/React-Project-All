import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import logo from '../assets/Instagram-priject.png'

const Signup = () => {
    const [formdata, setFormdata] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

 const handleSignup = async (e) => {
    e.preventDefault();
    console.log("🚀 Signup started");

    try {
      const res = await axios.get("http://localhost:3000/users?email=" + formdata.email);
      if (res.data.length > 0) {
        Swal.fire("Oops!", "User already exists!", "error");
        return;
      }

      await axios.post("http://localhost:3000/users", formdata);

      // ✅ Show alert first
      await Swal.fire({
        title: "Registered!",
        text: "Signup successful 🎉",
        icon: "success",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#00FFFF",
        allowOutsideClick: false,
        backdrop: true
      });

      // ✅ Navigate after user clicks "OK"
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);
      Swal.fire("Error", "Something went wrong 😢", "error");
    }
  };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 font-sans">
            <div className="w-full max-w-md backdrop-blur-lg bg-[#ffffff0f] border border-[#ffffff22] rounded-2xl p-8 shadow-2xl relative">

                <button onClick={() => navigate("/login")} className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#00FFFF] transition">×</button>

                <div className="text-center mb-6">
                    <img src={logo} alt="SocialPro" className="h-14 mx-auto" />
                    <h2 className="text-3xl font-extrabold text-white mt-2 tracking-wider">SIGN UP</h2>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">
                    <input type="text" name="name" placeholder="Enter your name" value={formdata.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#ffffff13] border border-[#ffffff33] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder-gray-300" required />
                    <input type="email" name="email" placeholder="Enter your email" value={formdata.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#ffffff13] border border-[#ffffff33] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder-gray-300" required />
                    <input type="password" name="password" placeholder="Create a password" value={formdata.password} onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#ffffff13] border border-[#ffffff33] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder-gray-300" required />

                    <button type="submit" className="w-full bg-[#00FFFF] hover:bg-[#00cccc] text-black font-bold py-2 rounded-lg shadow-md shadow-cyan-500/50 transition duration-300">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
