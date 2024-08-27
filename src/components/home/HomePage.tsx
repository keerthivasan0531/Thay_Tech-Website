import React from 'react';
import Carousel from './Carousel';
import ClientLogos from './ClientLogos'
import AccordionImage from './AccordionImage'
import TweetCardComponent from './TweetCardComponent';
import Carousel1 from './Carousel1';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Carousel1 />
      <ClientLogos />
      <AccordionImage/>
      <TweetCardComponent />
    </div>
  );
};

export default HomePage;
