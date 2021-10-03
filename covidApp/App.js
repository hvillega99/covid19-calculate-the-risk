import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/landingPage/Body';
import ScreenNews from './components/news/screenNews';
import BodyPrecauciones from './components/recomendacionesPage/body'
//import ScreenStatistics from './components/statistics/screenStatistics';
export default function App() {
  return (
    <Body/> 
  );
  }

/*export default function App() {
  return (
    <View>
      <ScreenNews />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/
