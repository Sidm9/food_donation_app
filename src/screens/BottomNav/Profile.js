import React, { useState, useEffect } from 'react'
import { ThemeProvider, Text, Button, Card } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUID, GetUser, RemoveUser } from '../../TOKEN'
import { View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import firebase from 'firebase';



const Profile = ({ navigation }) => {
    const [User, setUser] = useState("");
    const [carouselItems, setcarouselItems] = useState([]);

    const GetUserToken = async () => {
        let a = ""
        a = await GetUser();
        setUser(a);
        // console.log(User)
    }



    const fetchData = async () => {
        console.log("USER ID PROFILE PAGE: ", User)
        const ref = firebase.firestore().collection("Donor")
        ref.onSnapshot((snapshot) => {
            const temp = []
            snapshot.forEach(doc => temp.push(({ ...doc.data() })))
            setcarouselItems(temp);
        })
    }

    const getUID = async () => {
        await GetUser();
        const uid = await GetUID();
        await fetchData(uid);
    }

    useEffect(() => {
        (async () => {
            let a = ""

            a = await GetUser();
            temp = await GetUID();
            console.log(temp);
            setUser(a)
            console.log(a);
        })
            ()

        fetchData()
    }, [])

    const handleLogout = async () => {
        RemoveUser();
        let a = await GetUser();
        console.log("After Removed", a);
        navigation.navigate('Login');
    }

    return (
        <View style={theme.appearanceContainer}>
            <ScrollView>
                <ThemeProvider theme={theme}>
                    <View style={theme.mainContainer}>
                        <Text style={theme.headerText}> Profile {User}  </Text>
                        <Button onPress={handleLogout} title="Logout" />
                        <SafeAreaView style={{ flex: 1 }}>
                            <FlatList
                                data={
                                    carouselItems
                                }
                                renderItem={({ item, k }) =>
                                    <Card>
                                        <Card.Title>
                                            {item.TimeOfPickup}
                                        </Card.Title>



                                        <Text style={{ textAlign: "center" }}>
                                            {item.FoodItems}
                                        </Text>


                                    </Card>

                                }
                            />
                        </SafeAreaView>

                    </View>
                </ThemeProvider>
            </ScrollView>
        </View>
    )
}

export default Profile
