import React, { useState, useEffect } from 'react'
import { ThemeProvider, Text, Button } from 'react-native-elements'
import theme from '../GlobalStyles';
import {RemoveUser} from '../../TOKEN'
import { View } from 'react-native';


const Profile = ({navigation}) => {
    // const { User } = route.params;
    const [User, setUser] = useState("")
    const getUserToken = async () => {
        let a = ""
        a = await GetUser();
        console.log(a)
        setUser(a);
    }

    useEffect(() => {
        var ismount = true
        getUserToken();
        return () => {
            ismount = false
        }
    }, [User])

    const handleLogout = () => {
        RemoveUser();
        navigation.navigate('Login');
    }

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>
                    <Text style={theme.headerText}> Profile {User}  </Text>
                    <Button onPress={handleLogout} title = "Logout"/>
                </View>
            </ThemeProvider>
        </View>
    )
}

export default Profile
