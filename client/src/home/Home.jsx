import React from 'react';
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavoriteBook from './FavoriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <BestSellerBooks />
      <FavoriteBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
)};

export default Home;