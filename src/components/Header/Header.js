import React from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { HeaderStyles } from '../../styles/Styles';

const Header = React.memo(({ title, statusBarBackgroundColor }) => {
  const cutTitle = (name, trim) => {
    if (name.length > trim) {
      return `${name.substr(0, trim).trim()}...`;
    } else {
      return name;
    }
  };

  return (
    <React.Fragment>
      <StatusBar
        barStyle='light-content'
        backgroundColor={statusBarBackgroundColor}
        translucent={false}
      />
      <View style={HeaderStyles.container}>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => Alert.alert('Information', 'Back button pressed')}
          >
            <Icon name='keyboard-arrow-left' style={HeaderStyles.leftIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={HeaderStyles.centerText}>{cutTitle(title, 25)}</Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => Alert.alert('Information', 'Close button pressed')}
          >
            <Icon name='close' style={HeaderStyles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  statusBarBackgroundColor: PropTypes.string.isRequired,
};

export default Header;
