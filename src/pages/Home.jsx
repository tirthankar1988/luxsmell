// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Partners from '../components/Partners';
import SeasonSale from '../components/SeasonSale';
import ProductSection from '../components/ProductSection';
import SubscribeSection from '../components/SubscribeSection';
import PartnerBenefitsSection from '../components/PartnerBenefitsSection';
import SubscribeFooter from '../components/SubscribeFooter';

const Home = () => {
  return (
    <>
      <Banner />
      <Partners />
      <SeasonSale />
      <ProductSection title="New Arrivals" showAllLink={true} />
      <SubscribeSection />
      <PartnerBenefitsSection />
      <SubscribeFooter />
    </>
  );
};

export default Home;
