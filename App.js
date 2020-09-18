import React from 'react';
import UserStore from './src/store/UserStore';

import { View, Text } from 'react-native';

const App = () => {
  return (
    <UserStore>
      <View>
        <Text>Hello world!</Text>
      </View>
    </UserStore>
  );
};

export default App;
