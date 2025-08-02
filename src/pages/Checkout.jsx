import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/thank-you');
  };

  return (
    <main className="inner_body_area py-5">
      <div className="container">
        <h2 className="mb-5 mt-4 text-center">Checkout</h2>
        <div className="row">
          {/* Left Column: Billing/Shipping Form */}
          <div className="col-md-6 mb-4">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
              <h4 className="mb-4">Billing Information</h4>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Postal Code</label>
                <input type="text" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-success w-100">Place Order</button>
            </form>
          </div>

          {/* Right Column: Cart Summary */}
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h4 className="mb-4">Order Summary</h4>
              {cartItems.map(item => (
                <div className="d-flex justify-content-between align-items-center mb-3" key={item.id}>
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} width="60" className="me-3 rounded" />
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                  </div>
                  <div className="fw-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>${getTotalPrice()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
