import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, VolunteerScreen, DonorScreen } from './src/screens'



const Stack = createStackNavigator();

export default function App() {

  const [loaded, error] = useFonts({ ProductSans: require('./fonts/Product Sans Regular.ttf'), });

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)


  return (
    <NavigationContainer>
      <Stack.Navigator>



        <Stack.Screen name="Donor" component={DonorScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registeration" component={RegistrationScreen} />

        <Stack.Screen name="Volunteer" component={VolunteerScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}