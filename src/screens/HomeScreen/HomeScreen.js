import React, { useEffect, useState } from 'react'
import { Text, ThemeProvider, Button } from 'react-native-elements'
import { View } from 'react-native';
import theme from '../GlobalStyles';
// import { GetUser } from '../../GetUser';


const HomeScreen = ({ navigation }) => {

    const type = [
        {
            name: 'Volunteer',
        },
        {
            name: 'Donor',
        }

    ]

    const [User, setUser] = useState([]);

    // const callUser = async () => {
    //     console.log("lol");
    //     const a = await GetUser();
    //     if (a === null || undefined || " ") {
    //         a = "nope";
    //     }
    //     setUser(a.split("@"))
    //     console.log("User is in ", a);

    // }

    useEffect(() => {

        callUser
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

                    <Button onPress={() => navigation.navigate('Volunteer', { User: User[0] })} title={type[0].name} />

                    <Button onPress={() => navigation.navigate('Donor', { User: User[0] })} title={type[1].name} />

                </View>
            </View>
        </ThemeProvider>
    )
}

export default HomeScreen
