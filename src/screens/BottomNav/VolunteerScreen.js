import React, { useRef, useState, useEffect } from 'react'
import { Text, Card, ThemeProvider, Button } from 'react-native-elements'
import { ScrollView, View } from 'react-native';
import theme from '../GlobalStyles';
import Carousel from 'react-native-snap-carousel';
import FetchFromDB from '../../FetchFromDB';
import GetUser from '../../GetUser'
import firebase from '../../firestore';

const Volunteer = () => {
    const [User, setUser] = useState('')
    const [activeIndex, setactiveIndex] = useState(0)
    const carouselRef = useRef(null)
    const [carouselItems, setcarouselItems] = useState([]);

    const _renderItem = ({ item, index }) => {

        // console.log("CURRENT INDEX => " , carouselRef.currentIndex);
        return (

            <ThemeProvider theme={theme}>

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={{ uri: item.ImageURL }}
                            transition={true}
                            style={{ width: '100%', height: 200, borderRadius: 14 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>{item.FoodItems}</Text>


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

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: theme.backgroundColor,
                                    borderColor: theme.primaryColor,
                                    borderWidth: 2,
                                }}
                                containerStyle={{
                                    marginRight: 0,
                                    marginLeft: 0
                                }}
                                title="Go!"
                            />

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

    const FetchItems = () => {

        const db = firebase.firestore()
        var DonorRef = db.collection("Donor");

        DonorRef.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let items = doc.data();
                // console.log(items.length)
                setcarouselItems(carouselItems => [...carouselItems, items])
            });

        });

    }

    useEffect(() => {
        GetUserToken()
        FetchItems()


    }, [])


    return (
        <View style={theme.appearanceContainer}>
            <Text style={theme.headerText}>Hi!<Text style = {{color : theme.primaryColor , fontFamily : 'ProductSans'}}> {User}</Text></Text>
            <View style={{ flex: 1, flexDirection: 'row', }}>

                <Carousel
                    ref={carouselRef}
                    data={carouselItems}
                    layout='default'
                    layoutCardOffset={18}
                    renderItem={_renderItem}
                    sliderWidth={250}
                    itemWidth={325}
                    onSnapToItem={(activeIndex) => setactiveIndex(activeIndex)}
                />

            </View>
        </View>
    );
}

export default Volunteer