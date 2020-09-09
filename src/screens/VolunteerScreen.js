import React from 'react'
import { Text, Card, ThemeProvider, Button, Image } from 'react-native-elements'
import { ScrollView, View } from 'react-native';
import theme from './GlobalStyles';
import Carousel from 'react-native-snap-carousel';


export default class Volunteer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title:
                        ["Abra", "cadabra", "hakoona", "matata"],
                    address: "221 Baker Street London",
                    date: "11 September 2020",
                    time: "2:30 PM",
                    user: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "b2 602 eldeco",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
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
            //   <View style={{
            //       backgroundColor:'floralwhite',
            //       borderRadius: 5,
            //       height: 250,
            //       padding: 50,
            //       marginLeft: 25,
            //       marginRight: 25, }}>
            //     <Text style={{fontSize: 30}}>{item.title}</Text>
            //     <Text>{item.text}</Text>
            //   </View>



            <ThemeProvider theme={theme} >

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={require('../../assets/food2.png')}
                            transition={true}
                            style={{ width: '100%', height: 200, borderRadius: 14 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>Bruschetta</Text>


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

            </ThemeProvider >

        )
    }

    render() {
        return (
            <View style={theme.appearanceContainer}>
                <ScrollView>
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
                            data={this.state.carouselItems}
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