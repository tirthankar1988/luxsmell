import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <main className="thankyou-page py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container d-flex flex-column align-items-center justify-content-center text-center">
        <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
          <i className="fa fa-check fa-2x"></i>
        </div>
        <h2 className="mb-3 fw-bold">Thank You for Your Order!</h2>
        <p className="mb-4 lead">Your order has been placed successfully. We’ll send you an email confirmation shortly.</p>

        <div className="card shadow-sm w-100" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <h5 className="card-title mb-3">What's next?</h5>
            <ul className="list-unstyled text-start">
              <li className="mb-2"><i className="fa fa-check-circle text-success me-2"></i> You'll receive a confirmation email soon.</li>
              <li className="mb-2"><i className="fa fa-truck text-success me-2"></i> Your items will be shipped within 1–2 business days.</li>
              <li className="mb-2"><i className="fa fa-box text-success me-2"></i> Track your order from your account.</li>
            </ul>
          </div>
        </div>

        <Link to="/shop" className="btn btn-primary btn-lg mt-4">Continue Shopping</Link>
      </div>
    </main>
  );
};

export default ThankYou;
