import React from 'react';
import UserStore from './src/store/UserStore';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <UserStore>
      <Navigation />
    </UserStore>
  );
};

export default App;
