import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, VolunteerScreen, DonorScreen, LoadingScreen } from './src/screens'
import theme from './src/screens/GlobalStyles';
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator();

// const fetchFont = () => {
//   return Font.loadAsync({
//     'ProductSans': require('./assets/fonts/Product_Sans_Regular.ttf')
//   })
// }

// export const setfont = {
//   fontfamily: 'ProductSans'
// }

// export const fontContext = React.createContext(setfont);

export default function App() {

  // const [fontLoaded, setfontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return <AppLoading startAsync={fetchFont} onFinish={() => setfontLoaded(true)} onError={() => console.log('ERROR')} />
  // }





  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#101010',
          },
          headerTitleStyle: {
            color: '#FFFAFA',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Donor" component={DonorScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registeration" component={RegistrationScreen} />
        <Stack.Screen name="Volunteer" component={VolunteerScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );



}