import React, { useState, useEffect } from 'react'
import { ThemeProvider, Text, Button } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUser, RemoveUser } from '../../TOKEN'
import { View } from 'react-native';



const Profile = ({ navigation }) => {
    const [User, setUser] = useState("");

    const GetUserToken = async () => {
        let a = ""
        a = await GetUser();
        setUser(a);
        // console.log(User)
    }

    useEffect(() => {
        (async () => {
            let a = ""
            a = await GetUser();
            setUser(a)
        })
            ()
    }, [])

    const handleLogout = () => {
        RemoveUser();
        navigation.navigate('Login');
    }

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>
                    <Text style={theme.headerText}> Profile {User}  </Text>
                    <Button onPress={handleLogout} title="Logout" />
                </View>
            </ThemeProvider>
        </View>
    )
}

export default Profile
