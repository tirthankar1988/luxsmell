import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../public/images/main-product.png';
import client1 from '../../public/images/client1.webp';
import client2 from '../../public/images/client2.png';
import client3 from '../../public/images/client3.png';
const AboutUs = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">About LuxSmell</h1>
          <p className="lead mt-3">Elevate Your Senses. Define Your Presence.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={heroImage}
                alt="LuxSmell Story"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Our Journey</h2>
              <p>
                LuxSmell was born from a passion for crafting timeless fragrances that inspire emotion and individuality.
                Since our inception, we've dedicated ourselves to creating perfumes that not only smell divine,
                but also tell a story — your story.
              </p>
              <p>
                Each LuxSmell creation is the result of meticulous craftsmanship, using the finest ingredients sourced
                from around the globe. With every bottle, we aim to transform everyday moments into luxurious rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Essence</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <div className="p-5 border rounded h-100 shadow-sm">
                <h5 className="fw-bold mb-3">Our Mission</h5>
                <p>
                  To empower individuals through luxurious scents that reflect their identity and awaken the senses.
                  We strive for excellence in every note, ensuring each fragrance leaves a lasting impression.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-5 border rounded h-100 shadow-sm">
                <h5 className="fw-bold mb-3">Our Vision</h5>
                <p>
                  To be a global icon in luxury perfumery — celebrated for innovation, elegance, and emotion-driven
                  experiences. We envision a world where everyone wears their story, beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">The People Behind the Scent</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <img
                src={client1}
                className="rounded-circle mb-3"
              />
              <h5 className="fw-semibold">Arjun Malhotra</h5>
              <p className="text-muted">Founder & Master Perfumer</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src={client2}
                alt="CMO"
                className="rounded-circle mb-3"
              />
              <h5 className="fw-semibold">Priya Desai</h5>
              <p className="text-muted">Chief Brand Officer</p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src={client3}
                alt="Operations Head"
                className="rounded-circle mb-3"
              />
              <h5 className="fw-semibold">Kabir Shah</h5>
              <p className="text-muted">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2 className="mb-3">Discover Your Signature Scent</h2>
          <p className="mb-4">Explore our curated collection and experience luxury in every drop.</p>
          <Link to="/shop" className="btn btn-primary">
            Browse LuxSmell Fragrances
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
