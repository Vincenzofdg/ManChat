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
import PostScreen from './screens/stack/Post';
import LiveScreen from './screens/stack/Live';
// Tab Navigation
import HomeScreen from './screens/tab/Home'
import LivesScreen from './screens/tab/Lives'
import NewsScreen from './screens/tab/News'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#005E7C',
  }
}

const ToHomeScreen = () => {
  const options = {
    headerShown: false,
    tabBarShowLabel: false,
    // tabBarActiveBackgroundColor: 'purple',
    tabBarStyle: { 
      backgroundColor: 'black',
      borderTopWidth: 0,
      height: 38
    },
  };

  const icon = (name, focused) => {
    const css = { width: 15, height: 15, tintColor: !!focused ? 'white' : 'gray'};
    let imagePath;
    switch (name) {
      case 'home':
        imagePath = require('./assets/home.png');
        break;
      case 'lives':
        imagePath = require('./assets/lives.png');
        break;
      case 'news':
        imagePath = require('./assets/news.png');
        break;
    }
    
    return <Image source={imagePath} style={css} />
  }

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={options}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarIcon: ({focused}) => icon('home', focused) }}
      />
      <Tab.Screen 
        name="Lives"
        component={LivesScreen}
        options={{ tabBarIcon: ({focused}) => icon('lives', focused) }}
      />
      <Tab.Screen
        name="News" 
        component={NewsScreen}
        options={{ tabBarIcon: ({focused}) => icon('news', focused) }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const options = {
    headerShown: false,
  };

  return (
    <Provider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Stack.Navigator screenOptions={options} initialRouteName='SignUp'>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="Picture" component={PictureScreen} />
          <Stack.Screen name="Tags" component={TagsScreen} />

          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Live" component={LiveScreen} />

          <Stack.Screen name="HomePage" component={ToHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
