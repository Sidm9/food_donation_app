import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text, Button, Input, ThemeProvider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from './GlobalStyles';

const DonorScreen = ({ navigation }) => {

    const [emailAddress, setemailAddress] = useState('');

    const [dateData, setDateData] = useState('');
    const [timeData, setTimeData] = useState('');


    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }


    const handleTime = (dataFromChild) => {

        setTimeData(dataFromChild);
    }


    // For the time picker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const TimePicker = (props) => {
        // const [date, setDate] = useState(new Date());
        // const [mode, setMode] = useState('date');
        // const [show, setShow] = useState(false);

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
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: '2%', marginBottom: '7%' }}>
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
                    label="Date of Pickup"
                    onChangeText={(val) => { emailHandler(val) }}
                />

                <Input
                    placeholder={date.toLocaleTimeString()}
                    editable={false}
                    style={{ color: 'black' }}
                    label="Time of Pickup"
                    onChangeText={(val) => { emailHandler(val) }}
                />


            </View>
        );
    };

    // const theme = {
    //     Text: {
    //         style: {
    //             color: "green"
    //         }
    //     }
    // };

    return (
        <>
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


                <View style={{ flex: 0.6, width: '100%', borderWidth: 1, height: 200 }}>
                    <TimePicker />

                </View>

                {/* <Button containerStyle={{ width: '50%' }}  title="Nsssext" onPress={() => { navigation.push('ImageScreen') }} />
                     */}

                <ThemeProvider theme={theme}>
                    {/* <Text>wef</Text> */}
                    <Button  title="Next" onPress={() => { navigation.push('ImageScreen') }} />
                </ThemeProvider>

            </View>


        </>
    );

}
export default DonorScreen;
