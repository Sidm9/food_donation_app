import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)


  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registeration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}