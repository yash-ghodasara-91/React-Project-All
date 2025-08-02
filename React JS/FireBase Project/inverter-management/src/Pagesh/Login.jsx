import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, Lock } from "lucide-react"; 
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // ✅ Optional: save user data to localStorage
      localStorage.setItem("auth", true);
      localStorage.setItem("user", JSON.stringify({ email: user.email }));

      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/desboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-violet-100 px-4"
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <MailIcon className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-violet-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
