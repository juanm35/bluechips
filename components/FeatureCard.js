import React from 'react';
import Link from 'next/link';

const FeatureCard = ({ title, Icon, link }) => {
  return (
    <Link href={link}>
      <div className="w-full text-bcWhite m-auto flex flex-col items-center justify-center p-6  shadow-lg rounded-lg border-bcWhite/[0.5] cursor-pointer transform hover:scale-105 transition-transform duration-300">
        <Icon className='w-full h-auto max-h-64 max-w-64' />
        <h2 align="center" className="w-full m-auto text-xl font-bold text-4xl text-bcWhite">{title}</h2>
      </div>
    </Link>
  );
};

export default FeatureCard;