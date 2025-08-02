import React from 'react';
import { Link } from 'react-router-dom';
import mainProduct from '../../public/images/main-product.png';

const SubscribeFooter = () => {
  return (
    <section className="subscribe_area">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="subscription_box">
              <h2>
                <strong>@Luxsmell</strong> Subscriptions
              </h2>
              <h6>subscribe &amp; save</h6>
              <p>
                Be the first to know when your local florist has new seasonal
                selections, limited time offers, and much more!
              </p>
              {/* <Link to="/contact" className="btn-one d-table mt-1" >
                Connect with us <i className="fas fa-arrow-right"></i>
              </Link> */}
              <Link className="btn-one d-table mt-1" to="/contact">Connect with us <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="right_subscribe_box">
              <div className="red_single_bunch">
                <img
                  src={mainProduct}
                  alt="red rose single"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeFooter;
