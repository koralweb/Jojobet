import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../data/globalStyles';
import BookingFinish from '../components/BookingFinish';

const BookingScreen = ({navigation}) => {
  const [finish, setFinish] = useState(false);
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.title}>Ваше ім'я</Text>
        <TextInput placeholder={"Ваше ім'я"} style={styles.input} />
        <Text style={styles.title}>Телефон</Text>
        <TextInput placeholder={'Телефон'} style={styles.input} />
        <Text style={styles.title}>Дата</Text>
        <TextInput placeholder={'Дата'} style={styles.input} />
      </View>
      <TouchableOpacity
        style={{...styles.btn, marginBottom: 20}}
        onPress={() => setFinish(true)}>
        <Text style={styles.btnText}>Забронювати</Text>
      </TouchableOpacity>
      {finish && <BookingFinish navigation={navigation} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default BookingScreen;
