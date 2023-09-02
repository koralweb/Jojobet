// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './src/data/screens';
import {
  faArrowLeft,
  faCheckCircle,
  faClose,
  faHome,
  faPencilSquare,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  faCheckCircle,
  faArrowLeft,
  faShoppingCart,
  faHome,
  faClose,
  faPencilSquare,
);

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return screens
      .filter(el => el.component)
      .map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{headerShown: false}}
        />
      ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
