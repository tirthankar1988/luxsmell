import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="container py-5">Product not found</div>;

  const handleQtyChange = (type) => {
    setQty(prev => {
      if (type === 'decrease' && prev > 1) return prev - 1;
      if (type === 'increase') return prev + 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  return (
    <main className="inner_body_area py-5">
      <div className="container pro_container">
        <div className="row g-5 justify-content-between">
          <div className="col-md-5">
            <img src={product.image} className="img-fluid rounded d-block m-auto" alt={product.name} />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p className="text-muted small">Perfume</p>
            <div className="mb-3">
              <span className="text-danger fs-5"><s>${(product.price + 20).toFixed(2)}</s></span>
              <span className="fw-bold fs-3 ms-2 text-success">${(product.price * qty).toFixed(2)}</span>
            </div>
            <div className="mb-2">
              <strong>Availability:</strong> <span className="text-success">In Stock</span>
            </div>
            <div className="mb-3 text-warning fs-5">
              {Array.from({ length: 5 }).map((_, i) => <i key={i} className="fa fa-star"></i>)}
            </div>
            <p className="text-muted">{product.description}</p>
            <div className="mt-4">
              <label className="form-label">Quantity</label>
              <div className="d-flex align-items-center mb-3">
                <button className="btn btn-outline-secondary" onClick={() => handleQtyChange('decrease')}>−</button>
                <input type="text" value={qty} readOnly className="form-control text-center mx-2" style={{ width: '60px' }} />
                <button className="btn btn-outline-secondary" onClick={() => handleQtyChange('increase')}>+</button>
              </div>
              <button className="btn btn-success btn-lg mt-3" style={{width: '300px'}} onClick={handleAddToCart}>
                <i className="fa fa-cart-plus me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
