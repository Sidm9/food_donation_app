import React from 'react'
import { Text, Card, Image, ThemeProvider, Button } from 'react-native-elements'
import { ActivityIndicator, ScrollView } from 'react-native';
import theme from './GlobalStyles';
import { View } from 'react-native';

const DonorScreen = () => {
    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <Text style={theme.headerText}> Home</Text>

                <ScrollView>


                    <Card>
                        <Card.Image
                            source={require('../../assets/food.png')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>OKOKOK</Text>
                            <Text>Address </Text>
                            <Text>Date  </Text>
                            <Text>Time </Text>

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: '#101010',
                                    borderColor: '#1d9b54',
                                    borderWidth: 2,
                                    borderRadius: 1
                                }}
                                containerStyle={{
                                    marginRight: 0,
                                    marginLeft: 0
                                }}
                                title="Go!"
                            />

                        </View>
                    </Card>

                    <Card>
                        <Card.Image
                            source={require('../../assets/food.png')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>OKOKOK</Text>
                            <Text>Address </Text>
                            <Text>Date  </Text>
                            <Text>Time </Text>

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: '#101010',
                                    borderColor: '#1d9b54',
                                    borderWidth: 2,
                                    borderRadius: 1
                                }}
                                containerStyle={{
                                    marginRight: 0,
                                    marginLeft: 0
                                }}
                                title="Go!"
                            />

                        </View>
                    </Card>



                    <Card>
                        <Card.Image
                            source={require('../../assets/food.png')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>OKOKOK</Text>
                            <Text>Address </Text>
                            <Text>Date  </Text>
                            <Text>Time </Text>

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: '#101010',
                                    borderColor: '#1d9b54',
                                    borderWidth: 2,
                                    borderRadius: 1
                                }}
                                containerStyle={{
                                    marginRight: 0,
                                    marginLeft: 0
                                }}
                                title="Go!"
                            />

                        </View>
                    </Card>



                    <Card>
                        <Card.Image
                            source={require('../../assets/food.png')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <View style={theme.cardData}>

                            <Text style={{ fontFamily: 'ProductSansBold' }}>OKOKOK</Text>
                            <Text>Address </Text>
                            <Text>Date  </Text>
                            <Text>Time </Text>

                            <Button
                                type="outline"
                                buttonStyle={{
                                    backgroundColor: '#101010',
                                    borderColor: '#1d9b54',
                                    borderWidth: 2,
                                    borderRadius: 1
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
        </View>
    )
}

export default DonorScreen
