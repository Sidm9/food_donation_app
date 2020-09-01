import React, { useState } from 'react'
import { View, FlatList, Picker, TimePickerAndroid } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { functions } from 'firebase';
import TimePicker from '../screens/TimePicker';
const items = [
    // this is the parent or 'item'
    {
        name: 'Dal',
        id: 1,
    },
    {
        name: 'Eggs',
        id: 2,
    },
    {
        name: 'Rice',
        id: 3,
    },
    {
        name: 'Chapati',
        id: 4,
    },
    {
        name: 'Fruits',
        id: 5,
    },
    {
        name: 'Vegetables',
        id: 6,
    },
    {
        name: 'Lentils',
        id: 7,
    },
    {
        name: 'Fish',
        id: 8,
    },
    {
        name: 'Chicken',
        id: 9,
    },
];

const DonorScreen = () => {

    const [emailAddress, setemailAddress] = useState('');

    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }

    return (

        <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>

            <Text h2 style={{ textAlign: "left", marginBottom: 20 }}> Donate Food Details </Text>


            <Input
                placeholder='221 Baker Street...'
                label="Pickup Where?"
                onChangeText={(val) => { emailHandler(val) }}
            />

            <Input
                placeholder='Rice , Lentils , Daal'
                label="Food Item(s)"
                onChangeText={(val) => { emailHandler(val) }}
            />

            <Input
                placeholder=' Email Adress'
                label="Pickup Where?"
                onChangeText={(val) => { emailHandler(val) }}
            />

            <TimePicker />

        </View>
    );
}
export default DonorScreen;
