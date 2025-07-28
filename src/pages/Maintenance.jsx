import React from 'react';

const Maintenance = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">🚧 We'll Be Back Soon!</h1>
      <p className="text-lg md:text-xl mb-2">Our portfolio is currently undergoing scheduled maintenance.</p>
      <p className="text-lg md:text-xl">Please check back later.</p>
    </div>
  );
};

export default Maintenance;
