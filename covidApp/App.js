import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Body from './components/landingPage/Body';
import ScreenNews from './components/news/screenNews';
import BodyPrecauciones from './components/recomendacionesPage/body'
import ScreenStatistics from './components/statistics/screenStatistics';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"  
          component={Body}
        />
        <Stack.Screen 
          name="recomendaciones"  
          component={BodyPrecauciones}
        />
        <Stack.Screen 
          name="estadistica"  
          component={ScreenStatistics}
        />
        <Stack.Screen 
          name="noticias"  
          component={ScreenNews}
        />
      </Stack.Navigator>
    </NavigationContainer>

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
