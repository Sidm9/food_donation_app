import React, { useState, useEffect } from 'react'
import { View, ScrollView , Alert } from 'react-native';
import { Text, Button, Input, ThemeProvider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from './GlobalStyles';
import ImagePicker from './ImagePicker';
import * as Location from 'expo-location';
import firebase from '../firestore.js';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer']);
const DonorScreen = ({ navigation  , route}) => {

    const { User } = route.params;
    const [PickupWhere, setPickupWhere] = useState('');
    const [FoodItems, setFoodItems] = useState('');
    const [ImageURL, seteImageURL] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [Image, setImage] = useState('');

    const [Disabled, setDisabled] = useState(true);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);



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
            console.log("Change Date Pressed!")
        };

        const showTimepicker = () => {
            showMode('time');
            console.log("Change Time Pressed!")
        };

        return (

            <ThemeProvider theme={theme}>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: '7%' }}>
                    <View>
                        <Button onPress={showDatepicker} title="Change Date" />
                    </View>
                    <View>
                        <Button onPress={showTimepicker} title="Change Time" />
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        display="default"
                        minimumDate={new Date()}
                        onChange={onChange}
                    />
                )}

                <Input

                    placeholder={date.toDateString()}
                    editable={false}
                    label=" Date of Pickup"
                    onChangeText={(val) => { handlePickupWhere(val) }}
                />

                <Input
                    placeholder={date.toLocaleTimeString().replace(/:\d+ /, ' ')}
                    editable={false}
                    style={{ color: 'black' }}
                    label=" Time of Pickup"/>

            </ThemeProvider>

        );
    };
    // LOCATION DETAILS
    const LocationProvider = () => {

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

        let text = ' Waiting..';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = "Location Set ✔";
        }

        return (
            <View style={theme.mainContainer.center}>
                <Text style={theme.centerText}>{text}</Text>
            </View>
        );
    }


    // DONOR MAIN SCREEN

    const handleImage = (dataFromChild) => {
        setImage(dataFromChild);
    }

    const handlePickupWhere = (value) => {
        setPickupWhere(value);
        // console.log(emailAddress);
    }

    const handleFoodItems = (value) => {
        setFoodItems(value.split(","));
    }

    const handleSubmit = async () => {


        console.log("ls")
        let db = firebase.firestore();
        // FOR THE IMAGE DATA

        console.log("BLOBLOBLOEBLB")

        const randomString = () => {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }

        var img = "";
        async function uploadImageAsync(uri) {
            // Why are we using XMLHttpRequest? See:
            // https://github.com/expo/expo/issues/2402#issuecomment-443726662
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    console.log(e);
                    reject(new TypeError('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const ref = firebase
                .storage()
                .ref()
                .child(randomString());
            const snapshot = await ref.put(blob);

            // We're done with the blob, close and release it
            blob.close();
           
            return await snapshot.ref.getDownloadURL().then((downloadURL) => {
                img = downloadURL;
                seteImageURL(downloadURL);
                console.log("IMAGE UPLOADED");
                Alert.alert("UPLOADED IMAGE");
            })

        }

        uploadImageAsync(Image)

        db.collection("Donor").doc('Card').set({
            User: User,
            PickupWhere: PickupWhere,
            FoodItems: FoodItems,
            DateOfPickup: date.toDateString(),
            TimeOfPickup: date.toLocaleTimeString().replace(/:\d+ /, ' '),
            Location: location,
            ImageURL: img,
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

    }


    useEffect(() => {

        //WARNING REMOVAL 
        let isMounted = true; // note this flag denote mount status

        if (PickupWhere && FoodItems && Image && location !== '' || null) {

            setDisabled(false)

        }
        else {
            setDisabled(true)
        }
        return () => { isMounted = false };
    }, [PickupWhere, FoodItems, Image, location])

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
                            onChangeText={(val) => { handlePickupWhere(val) }}
                        />

                        <Input
                            placeholder='Rice , Lentils , Daal'
                            label=" Food Item(s)"
                            onChangeText={(val) => { handleFoodItems(val) }}
                        />

                        <View>
                            <TimePicker />
                            <ImagePicker callback={handleImage} />
                            <LocationProvider />
                        </View>
                        <Button title="Go!" disabled={Disabled} onPress={handleSubmit} />
                    </ScrollView>
                </View>
            </ThemeProvider>
        </View>
    );

}
export default DonorScreen;
