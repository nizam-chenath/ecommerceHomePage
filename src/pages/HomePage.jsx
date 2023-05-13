import React from 'react';
import "../styles/HomePage.css"
import img1 from "../assets/product1.jpeg"
import img2 from "../assets/product2.jpeg"
import img3 from "../assets/product3.jpeg"

function Homepage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage-header">
        {/* Logo */}
        <div className="logo">
          logo
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Search */}
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-btn">Search</button>
        </div>
      </header>

      {/* Main content */}
      <main className="homepage-main">
        <h1 className="title">Welcome to our store</h1>
        <h2 className="subtitle">Discover our latest products</h2>

        {/* Product list */}
        <div className="product-list">
          <div className="product-list-item">
            <img src={img1} alt="Product 1" className="product-img" />
            <h3 className="product-title">Product 1</h3>
            <p className="product-price">$9.99</p>
          </div>

          <div className="product-list-item">
            <img src={img2} alt="Product 2" className="product-img" />
            <h3 className="product-title">Product 2</h3>
            <p className="product-price">$19.99</p>
          </div>

          <div className="product-list-item">
            <img src={img3} alt="Product 3" className="product-img" />
            <h3 className="product-title">Product 3</h3>
            <p className="product-price">$29.99</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="homepage-footer">
        <p>&copy; 2023 ecommerce Company</p>
      </footer>
    </div>
  );
}

export default Homepage;
