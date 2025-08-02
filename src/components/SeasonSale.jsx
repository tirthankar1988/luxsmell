import React from 'react';
import { Link } from 'react-router-dom';

const SeasonSale = () => {
  return (
    <section className="season_sale_area">
      <div className="container">
        <div className="d-flex gap_season justify-content-between">
          <div className="text-left title_season">
            <h2>SEASON SALE</h2>
            <p>
              Send love for any occasion with farm-fresh Luxsmell under{' '}
              <strong>$65</strong>!
            </p>
          </div>
          <Link to="/shop" className="grab_btn">
            GRAB THIS DEAL <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonSale;
