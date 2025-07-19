import React from "react";

const products = [
  {
    id: 1,
    brand: "Nike",
    image: "Nike.jpg",
    title: "Nike Dri-Fit Black Tee",
    rating: 4.6,
    price: 1499,
    originalPrice: 2499,
    discount: "40% OFF",
    tag: "TOP SELLER"
  },
  {
    id: 2,
    brand: "Adidas",
    image: "Adidas.jpg",
    title: "Adidas Badge-Of-Sport Tee",
    rating: 4.5,
    price: 1299,
    originalPrice: 2199,
    discount: "41% OFF",
    tag: "BUY 2 FOR 1999"
  },
  {
    id: 3,
    brand: "Puma",
    image: "Puma.jpg",
    title: "Puma Graphic Crew Tee",
    rating: 4.4,
    price: 1199,
    originalPrice: 1999,
    discount: "40% OFF",
    tag: "NEW DROP"
  },
  {
    id: 4,
    brand: "Levi's",
    image: "Levi’s.jpg",
    title: "Levi’s Red Tab Relaxed Tee",
    rating: 4.7,
    price: 1599,
    originalPrice: 2799,
    discount: "43% OFF",
    tag: "BEST VALUE"
  },
  {
    id: 5,
    brand: "H&M",
    image: "H&M.jpg",
    title: "H&M Oversized Cotton Tee",
    rating: 4.3,
    price: 999,
    originalPrice: 1799,
    discount: "44% OFF",
    tag: "HOT"
  },
  {
    id: 6,
    brand: "Uniqlo",
    image: "Uniqlo.jpg",
    title: "Uniqlo AIRism Crew Tee",
    rating: 4.6,
    price: 1290,
    originalPrice: 1990,
    discount: "35% OFF",
    tag: "ULTRA SOFT"
  },
  {
    id: 7,
    brand: "Under Armour",
    image: "UA.jpg",
    title: "UA Sportstyle Logo Tee",
    rating: 4.5,
    price: 1399,
    originalPrice: 2299,
    discount: "39% OFF",
    tag: "GYM FAV"
  },
  {
    id: 8,
    brand: "Calvin Klein",
    image: "CK.jpg",
    title: "CK Monogram Cotton Tee",
    rating: 4.4,
    price: 2499,
    originalPrice: 3999,
    discount: "38% OFF",
    tag: "PREMIUM"
  },
  {
    id: 9,
    brand: "Tommy Hilfiger",
    image: "Tommy.jpg",
    title: "Tommy Flag Graphic Tee",
    rating: 4.6,
    price: 2299,
    originalPrice: 3499,
    discount: "34% OFF",
    tag: "LIMITED"
  },
  {
    id: 10,
    brand: "Superdry",
    image: "Superdry.jpg",
    title: "Superdry Vintage Logo Tee",
    rating: 4.5,
    price: 1899,
    originalPrice: 2999,
    discount: "37% OFF",
    tag: "TRENDING"
  }
];

const ProductCard = () => {
  return (
    <div className="container">
      <h4 className="titlecard">Buy 2 Oversized T-shirts and Pants at Rs.1200</h4>
      
      <div className="card-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />
              <div className="tag">{item.tag}</div>
            </div>
            <div className="details">
              <h3>{item.brand}</h3>
              <p>{item.title}</p>
              <div className="price">
                <span className="current">₹{item.price}</span>
                <span className="original">₹{item.originalPrice}</span>
                <span className="discount">{item.discount}</span>
              </div>
              <div className="rating">⭐ {item.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductCard;
