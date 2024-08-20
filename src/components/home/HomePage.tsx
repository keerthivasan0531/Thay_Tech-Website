import React from 'react';
import Carousel from './Carousel';
import ClientLogos from './ClientLogos'
import AccordionImage from './AccordionImage'
import TweetCardComponent from './TweetCardComponent';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel />
      <ClientLogos />
      <AccordionImage/>
      <TweetCardComponent />
    </div>
  );
};

export default HomePage;
