import React, { useState, useEffect } from 'react'
import { ThemeProvider, Text } from 'react-native-elements'
import theme from '../GlobalStyles';
import GetUser from '../../GetUser'
import { View } from 'react-native';


const Profile = () => {
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

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>
                    <Text style={theme.headerText}> Profile {User}  </Text>
                </View>
            </ThemeProvider>
        </View>
    )
}

export default Profile
