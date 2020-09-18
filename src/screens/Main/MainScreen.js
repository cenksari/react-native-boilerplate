import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <Text>Hello world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
