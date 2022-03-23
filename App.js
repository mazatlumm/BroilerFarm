import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from "react-native-bootsplash";
import Dashboard from './screen/Dashboard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Dashboard} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;