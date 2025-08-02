import React from 'react';

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Get in Touch</h1>
          <p className="lead mt-2">We’re here to answer your questions, listen to your feedback, and help you experience LuxSmell.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-md-7">
              <h3 className="mb-4">Send us a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="John Doe" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-md-5">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h4 className="mb-4">Contact Information</h4>
                <p className="mb-2">
                  <strong>Email:</strong><br />
                  <a href="mailto:support@luxsmell.com">support@luxsmell.com</a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong><br />
                  <a href="tel:+919999999999">+91 99999 99999</a>
                </p>
                <p className="mb-4">
                  <strong>Head Office:</strong><br />
                  LuxSmell Pvt Ltd,<br />
                  15th Floor, Aroma Tower,<br />
                  Park Street, Kolkata, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h3 className="mb-3">Have product or fragrance inquiries?</h3>
          <p>Let us help you find your perfect scent.</p>
          <a href="/shop" className="btn btn-outline-dark btn-lg mt-2">Explore Collection</a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
