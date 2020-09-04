import React, { useState } from 'react'
import { Input, Text, Button, ThemeProvider } from 'react-native-elements';
import firebase from '../../firestore.js';
import theme from "../GlobalStyles";
import { View, TouchableOpacity , StatusBar} from 'react-native';

const RegisterationScreen = ({ navigation }) => {

    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ConPasswordError, setConPasswordError] = useState('');

    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }

    const passwordHandler = (value) => {
        setPassword(value);
        console.log(password);
    }

    const conPasswordHandler = (value) => {
        setConPassword(value);
        console.log(conPassword);
    }

    const clearAll = () => {
        setemailAddress('')
        setPassword('')
        setConPassword('')
    }
    const handleSubmit = () => {
        // const db = firebase.firestore();
        // const userRef = db.collection("users").add({
        //     Email: {emailAddress},
        //     password : {password},
        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });
        if (password.trim() === conPassword.trim()) {

            firebase.auth().createUserWithEmailAndPassword(emailAddress, password).then(() => {
                console.log("OKKKK");
            })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    console.log("This is the error : ", errorCode);
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    if (errorCode === "auth/invalid-email" || errorCode === "auth/email-already-in-use") {
                        setemailError(errorMessage);
                        clearAll();
                    }
                    if (errorCode === "auth/weak-password") {
                        setPasswordError(errorMessage);
                    }
                    // ...
                })
        }
        else {
            setConPasswordError('Passwords Should Match');
            clearAll();
        }
    }
    return (
        <View style={theme.appearanceContainer}>
            <StatusBar barStyle="light-content" backgroundColor='#101010' />
            <ThemeProvider theme={theme}>
                <View style={theme.mainContainer}>
                    <Text style={theme.headerText}>Create{"\n"}Account</Text>
                    <Input
                        onChangeText={(val) => { emailHandler(val) }}
                        placeholder=' Email Address'
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        errorMessage={emailError}

                    />

                    <Input
                        secureTextEntry={true}
                        onChangeText={(val) => { passwordHandler(val) }}
                        placeholder=' Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        errorMessage={passwordError}
                    />

                    <Input
                        secureTextEntry={true}
                        onChangeText={(val) => { conPasswordHandler(val) }}
                        placeholder=' Enter Password Again'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        errorMessage={ConPasswordError}
                    />

                    <Button
                        onPress={handleSubmit}
                        title="REGISTER"
                    />

                    <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text style={theme.centerText}> I'm a member</Text>
                    </TouchableOpacity>
                </View>
            </ThemeProvider>
        </View>


    )
}

export default RegisterationScreen;
