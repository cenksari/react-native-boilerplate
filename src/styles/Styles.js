import { StyleSheet, Platform } from 'react-native';

export const AppStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  defaultText: {
    fontSize: 16,
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 90 : 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#147efb',
    paddingBottom: 10,
  },
  left: {
    paddingLeft: 10,
    alignItems: 'flex-start',
  },
  leftIcon: {
    fontSize: 26,
    color: '#ffffff',
  },
  center: {
    paddingBottom: 7,
  },
  centerText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
  right: {
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  rightIcon: {
    fontSize: 32,
    color: '#ffffff',
  },
});
