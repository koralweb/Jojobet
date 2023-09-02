import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomLine = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <FontAwesomeIcon icon={'home'} size={30} color={'grey'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-cart'} size={30} color={'grey'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#fff',
  },
});

export default BottomLine;
