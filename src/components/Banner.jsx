// src/components/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../public/images/main-product.png'; // <- Imported image

const Banner = () => {
  return (
    <section className="banner__one">
      <div className="container">
        <div className="row align-items-center gy-4 justify-content-center">
          <div className="col-xl-12 col-lg-12">
            <div className="banner__one-content text-center pt-4">
              <h1>Unleash Your Essence</h1>
              <p className="text-center">
                Discover signature scents that define your identity.
              </p>
              <div className="banner__one-content-bottom">
                <Link to="/shop" className="btn-one hero-buttn">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-12 text-center">
            <div className="banner__one-image">
              <img
                className="image-wrapper"
                src={heroImage} // <- using imported image
                alt="hero banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
