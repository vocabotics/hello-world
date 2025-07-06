import React from 'react';
import HelloWorldDisplay from '@/components/HelloWorldDisplay';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <HelloWorldDisplay />
    </div>
  );
};

export default HomePage;