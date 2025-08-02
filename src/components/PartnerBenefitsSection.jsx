import React from 'react';

const PartnerBenefitsSection = () => {
  return (
    <section className="sec_delivery text-center ppt">
      <div className="container">
        <h2 className="mb-5">Why Partner With Luxsmell?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="benefit-icon mb-3">
              <i className="fas fa-rocket fa-2x text-primary"></i>
            </div>
            <h4>Boost Visibility</h4>
            <p>Get listed on one of the fastest-growing floral platforms.</p>
          </div>
          <div className="col-md-4">
            <div className="benefit-icon mb-3">
              <i className="fas fa-briefcase fa-2x text-success"></i>
            </div>
            <h4>Reliable Clients</h4>
            <p>Reach verified customers with repeat purchase potential.</p>
          </div>
          <div className="col-md-4">
            <div className="benefit-icon mb-3">
              <i className="fas fa-handshake fa-2x text-danger"></i>
            </div>
            <h4>Support &amp; Collaboration</h4>
            <p>Dedicated team for your success and technical support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefitsSection;
