import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const screenName = useState(useRoute().name)[0];
  return (
    <View style={styles.cont}>
      <StatusBar barStyle={'light-content'} />
      {screenName !== 'Home' && (
        <View style={styles.topLine}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.topIconBlock}>
            <FontAwesomeIcon
              icon={'arrow-left'}
              style={styles.topIcons}
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
      <Image source={require('../assets/logo.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: colors.green,
    paddingTop: 40,
  },
  img: {
    width: 699 / 4,
    height: 534 / 4,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  topLine: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 200,
    paddingHorizontal: 20,
  },
  topIcons: {
    color: colors.orange,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Header;
