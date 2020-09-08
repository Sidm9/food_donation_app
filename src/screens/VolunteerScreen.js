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
                    title: "Item 1",
                    address: "221 Baker Street",
                    Date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "b2 602 eldeco",
                    Date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    Date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    Date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
                {
                    title: "Item 1",
                    address: "221 Baker Street",
                    Date: "22 August 2020",
                    time: "2:30 PM",
                    User: "Siddharth",
                    text: "Text 1",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
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

 
            <ThemeProvider theme={theme}>

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={require('../../assets/food.png')}
                            transition = {true}
                            style={{ width: '100%', height: 300, borderRadius: 14 }}
                        />
                        <View style={theme.cardData}>
                            <Text style={{ fontFamily: 'ProductSansBold' }}>OKOKOK</Text>
                            <Text>Address </Text>
                            <Text>Date  </Text>
                            <Text>Time </Text>

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: theme.backgroundColor,
                                    borderColor: theme.primaryColor,
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

    render() {
        return (
            <View style={theme.appearanceContainer}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Carousel
                        layout={"default"}
                        layoutCardOffset={`90`}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={100}
                        itemWidth={375}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </View>

        );
    }
}