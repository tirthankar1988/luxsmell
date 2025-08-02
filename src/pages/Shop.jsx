import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import '../assets/css/shop.css'; // <-- add this if you haven’t already

const Shop = () => {
  return (
    <>
    

      {/* Product Grid Section */}
      <section className="new_arrivals">
        <img className="abs_left_leaf" src="/images/leaf1.png" alt="pulp leaf" />
        <div className="container">
          <div className="full_arrivals">
            <div className="text-left title_area">
              <h2>New Arrivals</h2>
              <p>shop from the best</p>
            </div>
            <div className="row total_slider pt-4">
              {products.map((product) => (
                <div
                  className="col-sm-6 col-lg-6 col-xl-4 px-4 pb-4 mb-4 product_column"
                  key={product.id}
                >
                  <div className="product-card">
                    <div className="pro_card_image_area">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                      </Link>
                      <div className="quick-buttons">
                        <Link
                          to={`/product/${product.id}`}
                          className="btn btn-sm shop_btn dark_shop_btn w-100"
                        >
                          <i className="fas fa-shopping-cart"></i> BUY NOW
                        </Link>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="pro_title_area">
                        <h3 className="product-title">
                          <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <span className="product-price">${product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img className="abs_right_leaf" src="/images/leaf2.png" alt="pulp leaf" />
      </section>
    </>
  );
};

export default Shop;
