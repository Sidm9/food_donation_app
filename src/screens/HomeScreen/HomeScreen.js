import React from 'react'
import { Text, ThemeProvider, Button } from 'react-native-elements'
import { View } from 'react-native';
import theme from '../GlobalStyles';
const HomeScreen = ({ navigation }) => {

    const users = [
        {
            name: 'Volunteer',
        },
        {
            name: 'Donor',
        }

    ]

    return (
        <ThemeProvider theme={theme}>
            <View style={theme.appearanceContainer}>
                <View style={[theme.mainContainer, theme.mainContainer.center]}>

                    <Text style={[theme.headerText, { marginTop: '2%', marginBottom: '2%', textAlign: 'left' }]}>So what's on your mind?</Text>

                    <Button onPress={() => navigation.navigate('Volunteer')} title={users[0].name} />

                    <Button onPress={() => navigation.navigate('Donor')} title={users[1].name} />

                </View>
            </View>
        </ThemeProvider>
    )
}

export default HomeScreen
