import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
import Provider from './context/Provider'

import Imgs from './localized/Images';

// Stack Navigation
import SignUpScreen from './screens/SignUp';

import NewUserScreen from './screens/stack/NewUser'

import PostScreen from './screens/stack/Post';
import LiveScreen from './screens/stack/Live';
import ProfileScreen from './screens/stack/Profile';
import SearchByTagScreen from './screens/stack/SearchByTag';
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
    background: 'rgb(07 ,25, 51)',
    text: 'white'
  }
}

const ToHomeScreen = () => {
  const options = {
    headerShown: false,
    tabBarShowLabel: false,
    // tabBarActiveBackgroundColor: 'purple',
    tabBarStyle: { 
      backgroundColor: 'rgb(07,25,51)',
      borderTopWidth: 0,
      // height: 38,
      padding: 3
    },
  };

  const icon = (name, focused) => {
    const css = {width: 30, height: 30, tintColor: !!focused ? 'white' : 'gray'};
    let imagePath;
    switch (name) {
      case 'home':
        imagePath = Imgs.home;
        break;
      case 'lives':
        imagePath = Imgs.lives;
        break;
      case 'news':
        imagePath = Imgs.news;
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
        name="News" 
        component={NewsScreen}
        options={{ tabBarIcon: ({focused}) => icon('news', focused) }}
      />
      <Tab.Screen 
        name="Lives"
        component={LivesScreen}
        options={{ tabBarIcon: ({focused}) => icon('lives', focused) }}
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
          <Stack.Screen name="NewUser" component={NewUserScreen} />

          
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Live" component={LiveScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="SearchByTag" component={SearchByTagScreen} />
          <Stack.Screen name="HomePage" component={ToHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
