import React, { useState, useEffect } from 'react'
import { ThemeProvider, Text, Button, Card } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUser, RemoveUser } from '../../TOKEN'
import { View, ScrollView, FlatList } from 'react-native';
import firebase from 'firebase';



const Profile = ({ navigation }) => {
    const [User, setUser] = useState("");
    const [spells, setSpells] = useState([]);
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



        const fetchData = async () => {
            console.log("fetch")
            const db = firebase.firestore()
            const data = await db.collection("Donor").get()
            setSpells(data.docs.map(doc => doc.data()))
            console.log(spells.PickupWhere)
        }
        fetchData()
    }, [])

    const handleLogout = () => {
        RemoveUser();
        navigation.navigate('Login');
    }

    return (
        <View style={theme.appearanceContainer}>
            <ScrollView>
                <ThemeProvider theme={theme}>
                    <View style={theme.mainContainer}>
                        <Text style={theme.headerText}> Profile {User}  </Text>
                        <Button onPress={handleLogout} title="Logout" />

                        {/* <FlatList
                            data={
                                spells
                            }
                            renderItem={({ item ,k}) =>
                                <Card>
                                    <Card.Title>
                                        {item.TimeOfPickup}
                                    </Card.Title>



                                    <Text style={{ textAlign: "center" }}>
                                        {item.FoodItems}
                                    </Text>


                                </Card>

                            }
                        /> */}

                    </View>
                </ThemeProvider>
            </ScrollView>
        </View>
    )
}

export default Profile
