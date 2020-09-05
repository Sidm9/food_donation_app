import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import theme from './GlobalStyles';
import { Text } from 'react-native-elements';
import { ActivityIndicator, View, ThemeProvider } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const LoadingScreen = ({ navigation }) => {
    const [loaded, setloaded] = useState(false)
    const runn = async () => {

        await Font.loadAsync({
            'ProductSans': require('../../assets/fonts/Product_Sans_Regular.ttf'),
            'ProductSansBold': require('../../assets/fonts/Product_Sans_Bold.ttf'),
        });
        setloaded(true)
        console.log(loaded)
        if (loaded == true) {
            console.log("eoiurghiwerghierughieruhierughierguhiuer")
            navigation.navigate("Donor");
        }
    }

    useEffect(() => {

        runn();

    }, [loaded, setloaded]);

    return (

        <View style={theme.appearanceContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
                <Text style={{ marginTop: 10 }}> Loading... </Text>
            </View>

        </View>
    );

}

export default LoadingScreen