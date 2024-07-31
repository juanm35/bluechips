import React from 'react';
import FeatureCard from '../components/FeatureCard';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';

const Home = () => {
  return (
    <div className='flex flex-col p-8'>
      <img src="/logo.jpeg" alt="mainLogo" className='h-64 my-24 mx-auto' />
      <div className="flex flex-col gap-32 md:flex-row md:gap-4 justify-around items-center">
        <FeatureCard title="Buy" Icon={ShoppingCartIcon} />
        <FeatureCard title="Earn" Icon={AttachMoneyIcon} />
        <FeatureCard title="Learn" Icon={SchoolIcon} />
      </div>
    </div>
  );
};

export default Home;
