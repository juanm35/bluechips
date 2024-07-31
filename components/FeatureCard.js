import React from 'react';

const FeatureCard = ({ title, Icon, color }) => {
  return (
    <div className="text-bcWhite flex flex-col items-center p-6  rounded-lg border-bcWhite/[0.1] cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <Icon className='h-48 w-48' />
      <h2 className="text-xl font-bold text-4xl text-bcWhite">{title}</h2>
    </div>
  );
};

export default FeatureCard;