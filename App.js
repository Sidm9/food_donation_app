import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, VolunteerScreen, DonorScreen, LoadingScreen } from './src/screens'
import theme from './src/screens/GlobalStyles';
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator();


export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#101010',
          },
          headerTitleStyle: {
            color: '#FFFAFA',
            fontFamily: 'ProductSans',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen options={{ headerShown: null }} name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Donor" component={DonorScreen} />
        <Stack.Screen options={{ headerShown: null }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: null }} name="Registeration" component={RegistrationScreen} />
        <Stack.Screen name="Volunteer" component={VolunteerScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );



}