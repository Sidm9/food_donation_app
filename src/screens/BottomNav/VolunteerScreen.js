import React, { useRef, useState, useEffect } from 'react'
import { Text, Card, ThemeProvider, Button } from 'react-native-elements'
import { Linking, ScrollView, View, RefreshControl, LogBox } from 'react-native';
import theme from '../GlobalStyles';
import Carousel from 'react-native-snap-carousel';
import { GetUser } from '../../TOKEN'
import firebase from '../../firestore.js'


const Volunteer = ({ navigation }) => {
    const [User, setUser] = useState('')
    const [activeIndex, setactiveIndex] = useState(0)
    const carouselRef = useRef(null)
    const [carouselItems, setcarouselItems] = useState([]);

    // CARDS RENDER
    const _renderItem = ({ item, index, }) => {

        // console.log("CURRENT INDEX => " , carouselRef.currentIndex);
        return (

            <ThemeProvider theme={theme}>

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={{ uri: item.ImageURL }}
                            transition={true}
                            style={{ width: '100%', height: 300, borderRadius: 10 }}
                        />
                        <View style={theme.cardData}>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <Text style={{ fontFamily: 'ProductSansBold' }}>{item.FoodItems}</Text>
                                <Text style={{ color: 'grey' }}>{item.UserName}</Text>
                            </View>


                            <Text>{item.PickupWhere} </Text>


                            <Text style={{ color: theme.dullText }}>
                                Date: &nbsp;
                                    <Text>
                                    {item.DateOfPickup}
                                </Text>
                            </Text>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <Text style={{ color: theme.dullText }}>

                                    Time: &nbsp;
                                    <Text>
                                        {item.TimeOfPickup}
                                    </Text>

                                </Text>
                                <Text style={{ marginRight: '2%', color: theme.dullText }} >{item.user}</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                <Button
                                    type="outline"
                                    onPress={() => Linking.openURL(`google.navigation:q=${item.Location.coords.latitude}+${item.Location.coords.longitude}`)}
                                    buttonStyle={{
                                        backgroundColor: theme.backgroundColor,
                                        borderColor: theme.primaryColor,
                                        borderWidth: 2,
                                    }}
                                    containerStyle={{
                                        width: '50%',
                                        // marginRight: 0,
                                        // marginLeft: 0
                                    }}
                                    title="Go!"
                                />
                                <Button
                                    type="outline"
                                    onPress={() => navigation.navigate('Chat', {
                                        uid_of_card: item.UserID,
                                        FoodItems: item.FoodItems,
                                        Time: item.TimeOfPickup

                                    })}
                                    buttonStyle={{
                                        backgroundColor: theme.primaryColor,
                                        borderColor: theme.primaryColor,
                                        borderWidth: 2,
                                    }}
                                    containerStyle={{
                                        width: '50%',
                                    }}
                                    title="Contact"
                                />

                            </View>

                        </View>
                    </Card>

                </ScrollView>

            </ThemeProvider>
        )
    };

    const GetUserToken = async () => {
        let a = ""
        a = await GetUser();
        setUser(a);
        // console.log(User)
    }

    // FETCHING DATA
    const FetchItems = () => {
        const ref = firebase.firestore().collection("Donor")
        ref.orderBy("Location.timestamp", "desc").onSnapshot((snapshot) => {
            const temp = []
            snapshot.forEach(doc => temp.push(({ ...doc.data() })))
            setcarouselItems(temp);
        })
    }

    useEffect(() => {
        GetUserToken()
        FetchItems()


    }, [])

    useEffect(() => {
        console.log(carouselItems)
        console.log("updated")
    }, [carouselItems])
    return (

        <View style={theme.appearanceContainer}>
            <ScrollView>
                <Text style={theme.headerText}>Hi!<Text style={{ color: theme.primaryColor, fontFamily: 'ProductSans' }}> {User}</Text></Text>
                <Text style={theme.headerText}>Foods Avaliable </Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>

                    <Carousel
                        ref={carouselRef}
                        data={carouselItems}
                        layout='default'
                        layoutCardOffset={11}
                        renderItem={_renderItem}
                        sliderWidth={200}
                        itemWidth={355}
                        onSnapToItem={(activeIndex) => setactiveIndex(activeIndex)}
                    />

                </View>
            </ScrollView>
        </View>
    );
}

export default Volunteer