import React, { useState } from 'react';

const ProductSimple = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    const newProduct = { name, price, desc, image, category };
    setProducts([...products, newProduct]);

    // Clear form
    setName('');
    setPrice('');
    setDesc('');
    setImage('');
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add Product</h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <button
          onClick={handleClick}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </div>

      {/* Product Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 space-y-1">
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="text-gray-600">₹{p.price}</p>
                <p className="text-sm text-gray-500">Category: {p.category}</p>
                <p className="text-sm text-gray-700">{p.desc}</p>
                <button className="mt-3 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8 col-span-full">No Product Added</p>
        )}
      </div>
    </div>
  );
};

export default ProductSimple;
