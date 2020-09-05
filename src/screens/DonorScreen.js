import React, { useState } from 'react'
import { View, Image, ScrollView } from 'react-native';
import { Text, Button, Input, ThemeProvider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from './GlobalStyles';
import ImagePicker from './ImagePicker';

const DonorScreen = ({ navigation }) => {

    const [emailAddress, setemailAddress] = useState('');

    // const [dateData, setDateData] = useState('');
    // const [timeData, setTimeData] = useState('');



    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }


    // const handleTime = (dataFromChild) => {

    //     setTimeData(dataFromChild);
    // }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [Image, setImage] = useState('');

    const TimePicker = (props) => {


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


    const handleImage = (dataFromChild) => {
        setImage(dataFromChild);
    }
    return (
        <ScrollView style={theme.appearanceContainer}>

            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>

                    <Text style={theme.headerText}>Donate Food Details </Text>

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
                    </View>

                </View>
            </ThemeProvider>
        </ScrollView>
    );

}
export default DonorScreen;
