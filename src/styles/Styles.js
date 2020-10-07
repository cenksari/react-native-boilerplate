import { StyleSheet, Platform } from 'react-native';

export const AppStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 90 : 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#147efb',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  leftIcon: {
    fontSize: 30,
    color: '#ffffff',
    marginLeft: 15,
  },
  centerText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rightIcon: {
    fontSize: 32,
    color: '#ffffff',
    marginRight: 15,
  },
});
