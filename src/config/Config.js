import { Platform } from 'react-native';

const { OS } = Platform;

export const apiURLs = {
  memberApi: '',
  contentApi: '',
};

export const auth = {
  username: OS === 'ios' ? '' : '',
  password: OS === 'ios' ? '' : '',
};
