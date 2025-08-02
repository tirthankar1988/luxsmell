import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(CartContext); // ✅ fixed name

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <main className="inner_body_area">
        <div className="container my-5 text-center">
          <h1 className="black_text">Your Shopping Cart is Empty</h1>
          <Link to="/shop" className="btn btn-primary mt-4">Go to Shop</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="inner_body_area">
      <div className="container my-2">
        <h1 className="mb-5 mt-5 text-center black_text">Your Shopping Cart</h1>
        <div id="cart-items">
          {cartItems.map(item => (
            <div className="cart-item row align-items-center mb-4" key={item.id}>
              <div className="col-3 col-md-2">
                <img src={item.image} alt={item.name} className="img-fluid rounded" />
              </div>
              <div className="col-5 col-md-4">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-0 text-muted small">Perfume</p>
                <p className="mb-0 fw-semibold">${item.price.toFixed(2)}</p>
              </div>
              <div className="col-4 col-md-3 d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => decreaseQty(item.id)}
                  aria-label="Decrease quantity"
                >
                  <i className="fa fa-minus"></i>
                </button>
                <input
                  type="text"
                  className="form-control qty-input text-center"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => increaseQty(item.id)}
                  aria-label="Increase quantity"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <div className="col-5 col-md-2 fw-bold fs-5 text-end blue_text price_cart">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="col-2 col-md-1 text-end cross_icon">
                <button
                  className="remove-btn btn btn-sm btn-outline-danger"
                  onClick={() => removeItem(item.id)} // ✅ call correct function
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex mob_block justify-content-between align-items-center mt-5">
          <h4>Total: $<span id="cart-total">{getTotalPrice()}</span></h4>
          <Link to="/checkout" className="btn btn-success btn-lg">
  Proceed to Checkout
</Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
