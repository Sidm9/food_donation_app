import React, { useEffect, useState } from 'react'
import { Text, ThemeProvider, Button } from 'react-native-elements'
import { View } from 'react-native';
import theme from '../GlobalStyles';
import { GetUser } from '../../GetUser';
import { color } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const type = [
        {
            name: 'Volunteer',
        },
        {
            name: 'Donor',
        }

    ]

    const [User, setUser] = useState([])

    const callUser = async () => {
        console.log("lol");
        const a = await GetUser();
        setUser(a.split("@"))
        console.log("User is in ", a);
    }

    useEffect(() => {
        let isMounted = true; // note this flag denote mount status
        callUser();
        return () => { isMounted = false };
    }, [User])

    return (
        <ThemeProvider theme={theme}>
            <View style={theme.appearanceContainer}>
                <View style={[theme.mainContainer, theme.mainContainer.center]}>

                    <Text style={[theme.headerText, { marginTop: '2%', marginBottom: '2%', textAlign: 'left' }]}>So what's on your mind?
                    <Text style={[theme.headerText, { marginTop: '2%', marginBottom: '2%', textAlign: 'left', color: theme.accentColor }]}>
                            &nbsp;{User[0]}
                        </Text>
                    </Text>

                    <Button onPress={() => navigation.navigate('Volunteer')} title={type[0].name} />

                    <Button onPress={() => navigation.navigate('Donor')} title={type[1].name} />

                </View>
            </View>
        </ThemeProvider>
    )
}

export default HomeScreen
