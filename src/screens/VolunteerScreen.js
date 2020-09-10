import React from 'react'
import { Text, Card, ThemeProvider, Button } from 'react-native-elements'
import { ScrollView, View } from 'react-native';
import theme from './GlobalStyles';
import Carousel from 'react-native-snap-carousel';
import GetUser from '../GetUser'
import firebase from '../firestore';
import AsyncStorage from '@react-native-community/async-storage';


export default class Volunteer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            User: "",
            activeIndex: 0,
            carouselItems: [
                {
                    title:
                        "Bruschetta",
                    address: "221 Baker Street London",
                    date: "11 September 2020",
                    time: "2:30 PM",
                    user: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/food2.png")
                },
                {
                    title: "Item 1",
                    address: "b2 602 eldeco",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/food3.jpg")
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/food3.jpg")
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/food3.jpg")
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/food3.jpg")
                },
            ],
            carouselNon: [
                {
                    title: "Meat Balls",
                    address: "221 Baker Street London",
                    date: "11 September 2020",
                    time: "2:30 PM",
                    user: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/foodNON.jpg")

                },
                {
                    title: "Chicken",
                    address: "221 Baker Street London",
                    date: "11 September 2020",
                    time: "2:30 PM",
                    user: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/foodNON.jpg")

                },
                {
                    title: "Bruschetta",
                    address: "221 Baker Street London",
                    date: "11 September 2020",
                    time: "2:30 PM",
                    user: "Siddharth",
                    text: "Text 1",
                    img: require("../../assets/foodNON.jpg")

                },
            ]
        }
    }



    _renderItem({ item, index }) {

        function renderFoodItems() {
            var list = carouselItems.title.map = ((i) => {
                key = { i }
                return (
                    <Text>{i}</Text>
                )
            })
        }
        return (

            <ThemeProvider theme={theme}>

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={item.img}
                            transition={true}
                            style={{ width: '100%', height: 200, borderRadius: 14 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>{item.title}</Text>


                            <Text>{item.address} </Text>


                            <Text style={{ color: theme.dullText }}>
                                Date: &nbsp;
                                    <Text>
                                    {item.date}
                                </Text>
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <Text style={{ color: theme.dullText }}>

                                    Time: &nbsp;
                                    <Text>
                                        {item.time}
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
    }


    async componentDidMount() {
        console.log("hoho")
        // const a =  GetUser;

        const a = await GetUser()
        console.log(a)

        console.log("BABLABLDA")
    }

    render() {




        return (
            <View style={theme.appearanceContainer}>
                <ScrollView>
                    {/* <Text style={[theme.headerText, { marginBottom: '2%' }]}>    </Text> */}
                    <Text style={[theme.headerText, { marginBottom: '2%' }]}> Vegetarian  </Text>
                    <View style={{ flex: 2, flexDirection: 'row', }}>
                        <Carousel
                            layout={"default"}
                            // layoutCardOffset={90}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={10}
                            itemWidth={375}
                            renderItem={this._renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />

                    </View>
                    <Text style={[theme.headerText, { marginBottom: '2%' }]}> Non Vegetarian  </Text>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Carousel
                            layout={"default"}
                            // layoutCardOffset={90}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselNon}
                            sliderWidth={50}
                            itemWidth={385}
                            renderItem={this._renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />

                    </View>
                </ScrollView>
            </View>

        );
    }
}