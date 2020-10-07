import React from 'react';
import MemberProvider from './src/contexts/MemberContext';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <MemberProvider>
      <Navigation />
    </MemberProvider>
  );
};

export default App;
