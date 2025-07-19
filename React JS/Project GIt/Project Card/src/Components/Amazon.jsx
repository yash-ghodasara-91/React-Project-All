import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, Star, Heart, User, MapPin, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Amazon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [wishlist, setWishlist] = useState(new Set());

  const heroImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1200&h=400&fit=crop'
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
    { name: 'Fashion', icon: '👗', color: 'bg-pink-500' },
    { name: 'Home & Kitchen', icon: '🏠', color: 'bg-green-500' },
    { name: 'Books', icon: '📚', color: 'bg-orange-500' },
    { name: 'Sports', icon: '⚽', color: 'bg-purple-500' },
    { name: 'Beauty', icon: '💄', color: 'bg-red-500' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '₹4,999',
      originalPrice: '₹7,999',
      rating: 4.5,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      discount: '38% off'
    },
    {
      id: 2,
      name: 'Smart Watch Series 6',
      price: '₹24,999',
      originalPrice: '₹34,999',
      rating: 4.8,
      reviews: 856,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      discount: '29% off'
    },
    {
      id: 3,
      name: 'Wireless Bluetooth Speaker',
      price: '₹2,499',
      originalPrice: '₹3,999',
      rating: 4.3,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      discount: '38% off'
    },
    {
      id: 4,
      name: 'Professional Camera',
      price: '₹45,999',
      originalPrice: '₹59,999',
      rating: 4.7,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop',
      discount: '23% off'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-gray-700">
            <div className="flex items-center space-x-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                amazon.in
              </div>
              <div className="flex items-center space-x-2 text-sm hover:text-orange-400 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>Deliver to Rajkot 360001</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hover:text-orange-400 transition-colors cursor-pointer">Sign In</div>
              <div className="hover:text-orange-400 transition-colors cursor-pointer">Returns & Orders</div>
              <div className="relative hover:text-orange-400 transition-colors cursor-pointer">
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartItems}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="py-3">
            <div className="flex items-center max-w-3xl mx-auto">
              <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded-l-md hover:bg-gray-300 transition-colors">
                All <ChevronDown className="w-4 h-4 inline ml-1" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon.in"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="py-2">
            <div className="flex items-center space-x-6 text-sm">
              <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <Menu className="w-4 h-4" />
                <span>All</span>
              </button>
              <a href="#" className="hover:text-orange-400 transition-colors">Today's Deals</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Customer Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Registry</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Gift Cards</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Sell</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white">
                <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Amazing Deals Await</h2>
                <p className="text-xl mb-6 animate-fadeIn delay-100">Discover incredible products at unbeatable prices</p>
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 animate-fadeIn delay-200">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-lg p-6 text-white text-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Today's Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  {product.discount}
                </div>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                <button
                  onClick={addToCart}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Amazon</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Press Releases</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Science</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sell on Amazon</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Global Selling</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Advertise Your Products</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Your Account</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Returns Centre</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">100% Purchase Protection</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              amazon.in
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Amazon Clone. Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Amazon;