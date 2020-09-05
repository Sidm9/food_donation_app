import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView } from 'react-native';
import { Text, Button, Input, ThemeProvider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from './GlobalStyles';
import ImagePicker from './ImagePicker';
import * as Location from 'expo-location';

const DonorScreen = ({ navigation }) => {

    const [emailAddress, setemailAddress] = useState('');

    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [Image, setImage] = useState('');

    // DATE AND TIME PICKER
    const TimePicker = () => {


        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);

        };

        const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
        };

        const showDatepicker = () => {
            showMode('date');
        };

        const showTimepicker = () => {
            showMode('time');
        };

        return (

            <ThemeProvider theme={theme}>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: '7%' }}>
                    <View>
                        <Button raised onPress={showDatepicker} title="Change Date" />
                    </View>
                    <View>
                        <Button raised onPress={showTimepicker} title="Change Time" />
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        minimumDate={new Date()}
                        onChange={onChange}
                    />
                )}

                <Input

                    placeholder={date.toDateString()}
                    editable={false}
                    label=" Date of Pickup"
                    onChangeText={(val) => { emailHandler(val) }}
                />

                <Input
                    // This regex is not working..
                    placeholder={date.toLocaleTimeString().replace(/:\d+ /, ' ')}
                    editable={false}
                    style={{ color: 'black' }}
                    label=" Time of Pickup"
                    onChangeText={(val) => { emailHandler(val) }}
                />
                {/* 
                <Button title="Next" onPress={() => { navigation.push('Login') }} /> */}

            </ThemeProvider>

        );
    };





    // LOCATION DETAILS
    const LocationProvider = () => {
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);


        useEffect(() => {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            })();
        });

        let text = 'Waiting..';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = "Location Set ✔";
        }


        return (
            // <ThemeProvider theme={theme}>
            //     <View>
            //         <Text>{text}</Text>
            //     </View>
            // </ThemeProvider>
            <View style={theme.mainContainer.center}>
                <Text style={theme.centerText}>{text}</Text>
            </View>
        );
    }






    const handleImage = (dataFromChild) => {
        setImage(dataFromChild);
    }


    const handleSubmit = () => {
        console.log("lol")
    }

    // DONOR MAIN SCREEN
    return (
        <View style={theme.appearanceContainer}>

            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>

                    <Text style={theme.headerText}>Donate Food Details </Text>
                    <ScrollView>
                        <Input
                            placeholder='221 Baker Street..'
                            label=" Pickup Where?"
                            labelStyle={{ fontFamily: 'ProductSans' }}
                            onChangeText={(val) => { emailHandler(val) }}
                        />

                        <Input
                            placeholder='Rice , Lentils , Daal'
                            label=" Food Item(s)"
                            onChangeText={(val) => { emailHandler(val) }}
                        />

                        <View>
                            <TimePicker />
                            <ImagePicker callback={handleImage} />
                            <LocationProvider />
                        </View>
                        <Button title="Go!" onPress={handleSubmit} />
                    </ScrollView>
                </View>
            </ThemeProvider>
        </View>
    );

}
export default DonorScreen;
