import React from 'react';
import Link from 'next/link';

const Earn = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-bcWhite">
      <h1 className="text-8xl font-bold mt-8">Earn</h1>
      <Link href="/">
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Earn;
