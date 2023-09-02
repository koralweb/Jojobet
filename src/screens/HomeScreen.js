import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import screens from '../data/screens';
import colors from '../data/colors';

const HomeScreen = ({navigation}) => {
  const renderItems = () => {
    return screens.map(screen => (
      <TouchableOpacity
        key={screen.title}
        style={styles.item}
        onPress={() => navigation.push(screen.name)}>
        <Text style={styles.itemText}>{screen.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Wrapper>
      <View style={styles.cont}>{renderItems()}</View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  item: {
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#ededed',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  itemText: {
    color: colors.orange,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreen;
