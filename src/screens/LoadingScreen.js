import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import { Text } from 'react-native-elements';
import { ActivityIndicator, View } from 'react-native';


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
            navigation.navigate("Registeration");
        }
    }

    useEffect(() => {

        runn();

    }, [loaded, setloaded]);

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
                <Text style={{ marginTop: 10 }}> Loading... </Text>

            </View>
        </>
    );

}

export default LoadingScreen