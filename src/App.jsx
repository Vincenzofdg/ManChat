import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
import Provider from './context/Provider'

// Stack Navigation
import SignUpScreen from './screens/SignUp';
import InfoScreen from './screens/stack/Info'
import PictureScreen from './screens/stack/Picture';
import TagsScreen from './screens/stack/Tags';
// Tab Navigation
import HomeScreen from './screens/tab/Home'
import LivesScreen from './screens/tab/Lives'
import NewsScreen from './screens/tab/News'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const noHeader = {
  headerShown: false,
}

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#011028',
  }
}

const ToHomeScreen = () => {
  const options = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: 'purple',
    // tabBarInactiveBackgroundColor: 'black',
    tabBarStyle: { backgroundColor: 'black' },
  };

  const icon = (name, size) => {
    const css = { width: size, height: size, tintColor: 'white' };
    let imagePath;
    switch (name) {
      case 'home':
        imagePath = require('../assets/home.png');
        break;
      case 'lives':
        imagePath = require('../assets/lives.png');
        break;
      case 'news':
        imagePath = require('../assets/news.png');
        break;
    }
    return <Image source={imagePath} style={css} />
  }

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={options}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarIcon: ({size}) => icon('home', size) }}
      />
      <Tab.Screen 
        name="Lives"
        component={LivesScreen}
        options={{ tabBarIcon: ({size}) => icon('lives', size) }}
      />
      <Tab.Screen
        name="News" 
        component={NewsScreen}
        options={{ tabBarIcon: ({size}) => icon('news', size) }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Stack.Navigator screenOptions={noHeader} initialRouteName='SignUp'>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="Picture" component={PictureScreen} />
          <Stack.Screen name="Tags" component={TagsScreen} />

          <Stack.Screen name="HomePage" component={ToHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
