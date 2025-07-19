import React from 'react';


const Header = () => {
  return (
    <div className="header-wrapper">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="nav-left">
          <img src="/logo.svg" alt="logo" className="logo" />
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">MOBILE COVERS</a>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <i className="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search by products" />
          </div>
          <div className="icons">
            <p>LOGIN</p>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bottom-navbar">
        <div className="toggle-buttons">
          <button className="active">MEN</button>
          <button>WOMEN</button>
        </div>
        <div className="categories">
          <p>SHOP NOW</p>
          <p>LIVE NOW</p>
          <p>PLUS SIZE</p>
          <p>ACCESSORIES</p>
          <p>OFFICIAL MERCH</p>
          <p>SNEAKERS</p>
          <p>BEWAKOOF AIR</p>
          <p>HEAVY DUTY</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
