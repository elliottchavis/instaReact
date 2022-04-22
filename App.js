import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';

import { View, Text } from 'react-native'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

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
import RegisterScreen from './components/auth/Register'
import MainScreen from './components/Main'


const Stack = createStackNavigator();





export class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
     firebase.auth().onAuthStateChanged((user) => {
       if(!user){
         this.setState({
           loggedIn: false,
           loaded: true,
         })
       } else {
         this.setState({
           loggedIn: true,
           loaded: true,
         })
       }
     })
   }



  render(){
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style= {{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
      if(!loggedIn){
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>

          </Stack.Navigator>
        </NavigationContainer>
        );
      }

      return(
        <Provider store={store}>
          <MainScreen/>
        </Provider>
      )

    }


}

export default App
