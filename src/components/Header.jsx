// src/components/Header.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // Update cart count dynamically
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  }, [cartItems, location]);

  const openNav = () => setSideNavOpen(true);
  const closeNav = () => setSideNavOpen(false);

  return (
    <header className="header__area">
      <div className="header__sticky">
        <div className="container-fluid">
          <div className="header__area-menubar">

            {/* Logo */}
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link to="/">
                  <img
                    className="dark-n"
                    src="/images/logo.png" // ✅ CORRECT path from public/
                    alt="Lux Smell Logo"
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <span className="clicknav" onClick={openNav}>&#9776;</span>

            {/* Main Navigation */}
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu menu-responsive">
                <ul id="mobilemenu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop Now</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-btn">
                  <Link className="btn-one" to="/shop">
                    Make It Yours <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to="/cart" className="btn btn-outline-primary position-relative cart_icon">
                    <i className="fa fa-shopping-cart fs-5"></i>
                    <span
                      id="cart-count"
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                      {cartCount}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="responsive-menu_popup-icon sidebar-menu-show-hide">
                <i className="fas fa-bars" onClick={openNav}></i>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <div
        id="mySidenav"
        className={`sidenav ${sideNavOpen ? 'open' : ''}`}
        style={{ width: sideNavOpen ? '250px' : '0' }}
      >
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <Link to="/" onClick={closeNav}>Home</Link>
        <Link to="/shop" onClick={closeNav}>Shop Now</Link>
        <Link to="/about" onClick={closeNav}>About Us</Link>
        <Link to="/contact" onClick={closeNav}>Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
