import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Body from './components/landingPage/Body';
import ScreenNews from './components/news/screenNews';
import BodyPrecauciones from './components/recomendacionesPage/body'
import ScreenStatistics from './components/statistics/screenStatistics';
//import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <Body/> 
  );
  }

/*export default function App() {
  return (
    <View>
      <StatusBar hidden={true}/>
      <Body />
    </View> 
  );
  }*/
