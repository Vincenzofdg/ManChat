import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Provider from './context/Provider'

// Screens
import SignUpScreen from './screens/SignUp';
import ProfileScreen from './screens/Profile'
import InterestsScreen from './screens/Interests';

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
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Interests" component={InterestsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
