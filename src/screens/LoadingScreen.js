import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import { Text } from 'react-native-elements';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { isLoaded } from 'expo-font';


const LoadingScreen = ({ navigation }) => {
    const [loaded, setloaded] = useState(false)
    useEffect(() => {

        Font.loadAsync({
            'ProductSans': require('../../assets/fonts/Product_Sans_Regular.ttf'),
        }).then(

            setloaded(true),
            console.log(loaded),

        )
        if (loaded) {
            navigation.navigate("Login");
        }

    }, [loaded])

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