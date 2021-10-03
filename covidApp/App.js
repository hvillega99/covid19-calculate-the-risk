import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Body from './components/landingPage/Body';
import ScreenNews from './components/news/screenNews';
import BodyPrecauciones from './components/recomendacionesPage/body'
//import ScreenStatistics from './components/statistics/screenStatistics';
export default function App() {
  return (
    <View>
      <StatusBar hidden={true}/>
      <Body />
    </View> 
  );
  }
