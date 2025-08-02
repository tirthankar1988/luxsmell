import React from 'react';
import { Link } from 'react-router-dom';

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div
        className="subscribe__one"
        style={{ backgroundImage: "url('../public/images/subscribe-bg1.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="subscribe__one-title text-center">
                <h2>
                  What you wear should <span> speak before you do.</span>
                </h2>
                <Link to="/contact" className="btn-one mx-auto d-table mt-5">
                  Connect with Us <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
