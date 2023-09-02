import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/globalStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BookingFinish = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.centerBlock}>
        <FontAwesomeIcon icon={'check-circle'} color={'green'} size={50} />
        <Text style={styles.text}>
          Ваше замовлення успішно додано. Наші менеджери зв'яжуться з вами
          найближчим часом
        </Text>
      </View>
      <TouchableOpacity
        style={{...styles.btn, marginBottom: 20}}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btnText}>На головну</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    zIndex: 100,
    alignItems: 'center',
  },
  centerBlock: {
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 200,
    width: '95%',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default BookingFinish;
