import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, Zap, ZapOff, BatteryCharging, LogIn, UserPlus, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = ["Home", "Inverters", "Dashboard", "Contact"];

    return (
        <motion.nav
            initial={{ y: -90 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-sky-100 to-white shadow-md fixed w-full top-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-indigo-700 tracking-wide flex items-center gap-1">
                    ⚡ Inverter<span className="text-yellow-500">Zone</span>
                </h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
                    {navLinks.map((link, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="cursor-pointer hover:text-indigo-600"
                        >
                            {link}
                        </motion.li>
                    ))}
                </ul>

                {/* Icons + User */}
                <div className="hidden md:flex items-center gap-4 relative">
                    <Zap className="text-yellow-500 cursor-pointer" />
                    <ZapOff className="text-red-400 cursor-pointer" />
                    <BatteryCharging className="text-green-500 cursor-pointer" />

                    {/* User Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setUserOpen(true)}
                        onMouseLeave={() => setUserOpen(false)}
                    >
                        <User className="w-6 h-6 text-gray-700 cursor-pointer" />

                        {userOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                            >
                                <button
                                    onClick={() => navigate("/")}
                                    className="w-full flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition duration-200"
                                >
                                    <LogIn className="w-4 h-4" />
                                    Login
                                </button>

                                <button
                                    onClick={() => navigate("/signup")}
                                    className="w-full flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-white transition duration-200"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    Sign Up
                                </button>

                                <button
                                    onClick={() => navigate("/signup")}
                                    className="w-full flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white transition duration-200"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </motion.div>
                        )}
                    </div>

                </div>

                {/* Hamburger for Mobile */}
                <div className="md:hidden text-gray-800" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Nav */}
            {open && (
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white px-4 pb-4 pt-2 text-gray-800 space-y-2 shadow"
                >
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className="hover:text-indigo-600 cursor-pointer transition-all duration-200"
                        >
                            {link}
                        </li>
                    ))}
                    <hr />
                    <li className="mt-2">
                        <button className="w-full text-left py-2 hover:bg-gray-100">Login</button>
                        <button className="w-full text-left py-2 hover:bg-gray-100">Sign Up</button>
                    </li>
                </motion.ul>
            )}
        </motion.nav>
    );
};

export default Navbar;
