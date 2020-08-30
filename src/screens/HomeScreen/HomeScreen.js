import React from 'react'
import { Card, Text, Image } from 'react-native-elements'
import { View, Pressable, TouchableOpacity } from 'react-native';
const HomeScreen = ({ navigation }) => {

    const users = [
        {
            name: 'Volunteer',
        },
        {
            name: 'Donor',
        }

    ]


    return (
        <>
            <View style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: 'center' }}>

                <Text h3 style={{ textAlign: 'center' }}> So what's on your mind?</Text>


                <TouchableOpacity style={{ width: '90%' }} onPress={() => navigation.navigate('Volunteer')}>
                    <Card containerStyle={{ width: '90%' }}>

                        <Text h4 style={{ textAlign: "center" }} >{users[0].name}</Text>

                    </Card>

                </TouchableOpacity >

                <TouchableOpacity style={{ width: '90%' }} onPress={() => navigation.navigate('Donor')}>
                    <Card containerStyle={{ width: '90%' }} >

                        <Text h4 style={{ textAlign: "center" }} >{users[1].name}</Text>

                    </Card>
                </TouchableOpacity>


            </View>
        </>
    )
}

export default HomeScreen
