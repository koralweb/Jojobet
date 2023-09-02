import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import {useRoute} from '@react-navigation/native';
import HeaderPadding from './HeaderPadding';

const excludedScreens = ['Shop', 'Cart'];

const Wrapper = ({navigation, children}) => {
  const screenName = useState(useRoute().name)[0];

  const renderHeader = () => {
    if (excludedScreens.includes(screenName)) {
      return <HeaderPadding />;
    }
    return <Header navigation={navigation} />;
  };

  return (
    <View style={styles.cont}>
      {renderHeader()}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});

export default Wrapper;
