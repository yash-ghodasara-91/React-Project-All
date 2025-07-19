// import React from 'react'
import React, { useState } from 'react';
export default function ImageGallary() {
    // const fullimgbox=document.getElementById("fullimgbox");
    // const fullimg=document.getElementById("fullimg");

    // const openimg=()=>{
    //        fullimgbox.style.display="block"; 
    // }
    
    // const closeimg=()=>{
    //        fullimgbox.style.display="none"; 
    // }
  const [fullImg, setFullImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    'slider-2.jpg',
    'slider-3.jpg',
    'slider-4.jpg',
    'slider-5.jpg',
    'slider-6.jpg',
    'slider-7.jpg',
    'slider-8.jpg',
    'slider-9.jpg',
  ];

  const openImage = (img) => {
    setFullImg(img);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setFullImg('');
  };
  return (
    <div>

        {/* <div class='fullimg' id='fullimgbox'>
        <img src='slider-2.jpg' alt='' id='fullimg'></img>
        <span onClick={closeimg}>X</span>
    </div>
        <div class='images'>
        <img src='slider-2.jpg' alt='' onClick={openimg}></img>
        <img src='slider-3.jpg' alt='' onClick={openimg}></img>
        <img src='slider-4.jpg' alt='' onClick={openimg}></img>
        <img src='slider-5.jpg' alt='' onClick={openimg}></img>
        <img src='slider-6.jpg' alt='' onClick={openimg}></img>
        <img src='slider-7.jpg' alt='' onClick={openimg}></img>
        <img src='slider-8.jpg' alt='' onClick={openimg}></img>
        <img src='slider-9.jpg' alt='' onClick={openimg}></img>
    </div> */}
    <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            // alt={`img-${index}`}.t
            onClick={() => openImage(img)}
            className="thumbnail"
          />
        ))}
      </div>

      {isOpen && (
        <div className="overlay">
          <span className="close-btn" onClick={closeImage}>✖</span>
          <img src={fullImg} alt="Full View" className="full-img" />
        </div>
      )}

    
    </div>
    

   
  )
}
