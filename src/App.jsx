import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Provider from './context/Provider'

// Stack
import SignUpScreen from './screens/SignUp';
import InfoScreen from './screens/stack/Info'
import PictureScreen from './screens/stack/Picture';
import TagsScreen from './screens/stack/Tags';

const Stack = createStackNavigator();

const stackSettings = {
  headerShown: false,
}

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#011028',
  }
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Stack.Navigator screenOptions={stackSettings}>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="Picture" component={PictureScreen} />
          <Stack.Screen name="Tags" component={TagsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
