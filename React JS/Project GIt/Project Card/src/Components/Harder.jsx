// components/Header.jsx
import React from 'react';

const Header = ({ dark, onToggle }) => {
  return (
    <header className="flex items-center justify-between flex-wrap bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="text-2xl font-bold">🛒 SwiftShop</div>

      <nav className="flex gap-4 text-sm font-medium">
        <a href="#" className="hover:text-cyan-400">Home</a>
        <a href="#" className="hover:text-cyan-400">Products</a>
        <a href="#" className="hover:text-cyan-400">Offers</a>
        <a href="#" className="hover:text-cyan-400">Contact</a>
      </nav>

      {/* Search */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md text-gray-300 border border-amber-100"
        />
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-1 rounded-md">
          🔍
        </button>
      </div>

      {/* Login, Cart, Light/Dark */}
      <div className="flex items-center gap-4 ml-4">
        <button className="border border-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-500">
          👤 Login
        </button>

        <button className="border border-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-500 flex items-center gap-1">
          🛒 Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
