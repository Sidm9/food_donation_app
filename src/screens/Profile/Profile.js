import React from 'react'
import { ThemeProvider, Text } from 'react-native-elements'
import theme from '../GlobalStyles';
import { View } from 'react-native';


const Profile = (route) => {
    // const { User } = route.params;

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>
                    <Text style={theme.headerText}> Profile  </Text>
                </View>
            </ThemeProvider>
        </View>
    )
}

export default Profile
