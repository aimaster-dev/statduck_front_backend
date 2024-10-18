import React from 'react';
import Benifits from './home/section/Benifits';
import FeaturesSection from './home/section/Features-section';
import HeroSection from './home/section/Hero-section';
import HowItWorks from './home/section/How-it-works';
import Testimonial from './home/section/test+beni';
import TestBeni from './home/section/test+beni';
import Footer from '@/components/Footer';


const home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TestBeni />
      <Footer />
    </div>
  );
};

export default home;