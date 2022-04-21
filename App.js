import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOQY8qamAftLzyFawHQ0RuTRsUYvH83_s",
  authDomain: "instareact-1b029.firebaseapp.com",
  projectId: "instareact-1b029",
  storageBucket: "instareact-1b029.appspot.com",
  messagingSenderId: "567776136871",
  appId: "1:567776136871:web:775a84bb62673b99869582",
  measurementId: "G-DNV3VE9TSB"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing'



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
