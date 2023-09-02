import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../data/globalStyles';

const EmptyCart = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Ваш кошик порожній</Text>
      <TouchableOpacity
        style={{...styles.btn, marginBottom: 20}}
        onPress={() => navigation.push('Shop')}>
        <Text style={styles.btnText}>В магагин</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {flex: 1},
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
    marginTop: 50,
  },
});

export default EmptyCart;
