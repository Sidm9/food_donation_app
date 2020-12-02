import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import theme from './GlobalStyles';
import { Text } from 'react-native-elements';
import { ActivityIndicator, View, ThemeProvider } from 'react-native';
import { GetUser } from '../TOKEN';
import { LogBox } from 'react-native';

const LoadingScreen = ({ navigation }) => {
    const [loaded, setloaded] = useState(false)
    const [User, setUser] = useState('');

    const CheckUser = async () => {
        var resp = await GetUser();
        setUser(resp);
    }
    const runn = async () => {

        await Font.loadAsync({
            'ProductSans': require('../../assets/fonts/Product_Sans_Regular.ttf'),
            'ProductSansBold': require('../../assets/fonts/Product_Sans_Bold.ttf'),
        });
        setloaded(true)
        console.log(loaded)


        if (loaded == true) {
            if (User != null || '' || undefined) {
                navigation.navigate("BottomNav");
            }
            else {
                navigation.navigate("Login");
            }
        }
    }
    useEffect(() => {
        runn();
        CheckUser();
    }, [loaded, setloaded]);

    return (

        <View style={theme.appearanceContainer}>
           
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <ActivityIndicator size="large" />
                <Text style={{ marginTop: 10, color: theme.textColor }}> Loading... </Text>

            </View>

        </View>
    );

}

export default LoadingScreen