import React, { useRef, useState, useEffect } from 'react'
import { Text, Card, ThemeProvider, Button } from 'react-native-elements'
import { Linking, ScrollView, View, RefreshControl } from 'react-native';
import theme from '../GlobalStyles';
import Carousel from 'react-native-snap-carousel';
import { GetUser } from '../../TOKEN'
import firebase from '../../firestore.js'


const Volunteer = ({ navigation }) => {
    const [User, setUser] = useState('')
    const [activeIndex, setactiveIndex] = useState(0)
    const carouselRef = useRef(null)
    const [carouselItems, setcarouselItems] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log("Refreshed!")
        wait(2000).then(() => {
            setRefreshing(false)
            FetchItems();
        });
    }, []);


    const _renderItem = ({ item, index, }) => {

        // console.log("CURRENT INDEX => " , carouselRef.currentIndex);
        return (

            <ThemeProvider theme={theme}>

                <ScrollView

                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>


                    <Card>
                        <Card.Image
                            source={{ uri: item.ImageURL }}
                            transition={true}
                            style={{ width: '100%', height: 300, borderRadius: 14 }}
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
                                onPress={() => Linking.openURL(`google.navigation:q=${item.Location.coords.latitude}+${item.Location.coords.longitude}`)}
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
        setcarouselItems([])
        var tempData = []
        const db = firebase.firestore()
        var DonorRef = db.collection("Donor");
        DonorRef.orderBy("Location.timestamp", "desc").onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                //console.log(doc.data())
                tempData.push(doc.data())
            });
            setcarouselItems(tempData)

        })


    }

    useEffect(() => {
        GetUserToken()
        FetchItems()


    }, [])


    return (


        <View style={theme.appearanceContainer}>
            <Text style={theme.headerText}>Hi!<Text style={{ color: theme.primaryColor, fontFamily: 'ProductSans' }}> {User}</Text></Text>
            <Text style={theme.headerText}>Foods Avaliable </Text>
            <Text style={theme.headerText}>LOGS = {carouselItems.length == null ? "Wait.." : carouselItems.length}</Text>
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
        </View>
    );
}

export default Volunteer