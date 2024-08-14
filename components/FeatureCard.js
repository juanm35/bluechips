import React from 'react';
import Link from 'next/link';

const FeatureCard = ({ title, Icon, link }) => {
  return (
    <Link href={link}>
      <div className="text-bcWhite  flex flex-col items-center p-6  shadow-lg rounded-lg border-bcWhite/[0.5] cursor-pointer transform hover:scale-105 transition-transform duration-300">
        <Icon className='h-48 w-48' />
        <h2 className="text-xl font-bold text-4xl text-bcWhite">{title}</h2>
      </div>
    </Link>
  );
};

export default FeatureCard;