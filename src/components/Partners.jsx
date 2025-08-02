import React from 'react';
import { Link } from 'react-router-dom';

// Import partner logos (make sure these images are in src/assets/images/)
import partner1 from '../../public/images/partner1.png';
import partner2 from '../../public/images/partner2.png';
import partner3 from '../../public/images/partner3.png';
import partner4 from '../../public/images/partner4.png';

const Partners = () => {
  return (
    <section className="sec_delivery text-center crp_area">
      <div className="container">
        <h1 className="mb-3">Our Corporate Partners and Investors</h1>
        <p className="mb-4">
          At the heart of our growth lies the trust and collaboration of visionary partners and investors.
        </p>
        <Link to="/contact" className="btn-one mx-auto d-table mt-2 mb-5 cnnct_btn">
          Connect with Us <i className="fas fa-arrow-right"></i>
        </Link>
        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <div className="partner-card">
              <img src={partner1} alt="Partner 1" className="partner-logo" />
              <p className="mb-0">Aurelia Scentworks</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="partner-card">
              <img src={partner2} alt="Partner 2" className="partner-logo" />
              <p className="mb-0">Noir Bloom</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="partner-card">
              <img src={partner3} alt="Partner 3" className="partner-logo" />
              <p className="mb-0">Veloura Essence Co.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="partner-card">
              <img src={partner4} alt="Partner 4" className="partner-logo" />
              <p className="mb-0">Maison Elara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
