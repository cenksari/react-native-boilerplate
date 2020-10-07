import React from 'react';
import { View, Text } from 'react-native';

import { AppStyles } from '../../styles/Styles';

import { Header } from '../../components/Header/Header';

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header title='Main screen' statusBarBackgroundColor='#147efb' />
      <View style={AppStyles.appContainer}>
        <Text>React native boilerplate</Text>
      </View>
    </React.Fragment>
  );
};

export default MainScreen;
