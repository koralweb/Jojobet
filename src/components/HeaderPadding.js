import React from 'react';
import {StatusBar, View} from 'react-native';

const HeaderPadding = () => {
  return (
    <View style={{paddingTop: 40, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
};

export default HeaderPadding;
