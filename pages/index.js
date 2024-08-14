import React, { useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';

const Home = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { title: 'Buy', Icon: ShoppingCartIcon, link: '/buy' },
    { title: 'Earn', Icon: AttachMoneyIcon, link: '/earn' },
    { title: 'Learn', Icon: SchoolIcon, link: '/learn' }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <div className='flex flex-col p-8'>
      <img src="/logo.jpeg" alt="mainLogo" className='h-64 my-24 mx-auto' />
      <div className="relative flex flex-col gap-32 lg:flex-row lg:gap-4 justify-around items-center">
        {/* Carousel for mobile */}
        <div className="flex lg:hidden justify-between items-center w-full text-bcWhite text-6xl">
          <button onClick={prevCard} className="p-2">
            &#9664; {/* Left arrow */}
          </button>
          <FeatureCard 
            title={cards[currentCard].title} 
            Icon={cards[currentCard].Icon} 
            link={cards[currentCard].link} 
          />
          <button onClick={nextCard} className="p-2">
            &#9654; {/* Right arrow */}
          </button>
        </div>

        {/* Default view for desktop */}
        <div className="hidden lg:flex gap-32 justify-around items-center">
          {cards.map((card, index) => (
            <FeatureCard 
              key={index} 
              title={card.title} 
              Icon={card.Icon} 
              link={card.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
