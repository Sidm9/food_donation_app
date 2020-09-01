import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Input } from 'react-native-elements';

const TimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('🤣');
    const [dateShow, setdateShow] = useState()
    const [TimeShow, setTimeShow] = useState()
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date || time;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setTime(currentDate);
        setdateShow(date.toDateString())
        setTimeShow(time.toLocaleTimeString())
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
            <View style={{ display: "flex", flexDirection : "column"}}>
                <View>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                    <Button onPress={showTimepicker} title="Show time picker!" />
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
                placeholder={dateShow}
                editable={false}
                style={{ color: 'black' }}
                label="Date of Pickup"
                onChangeText={(val) => { emailHandler(val) }}
            />

            <Input
                placeholder={TimeShow}
                editable={false}
                style={{ color: 'black' }}
                label="Time of Pickup"
                onChangeText={(val) => { emailHandler(val) }}
            />


        </View>
    );
};
export default TimePicker;