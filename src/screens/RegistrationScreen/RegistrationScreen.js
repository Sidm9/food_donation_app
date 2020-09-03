import React, { useState } from 'react'
import { Input, Text, Button, Card } from 'react-native-elements';
import firebase from '../../firestore.js';
import theme from "../GlobalStyles";
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
        // setemailError('')
        // setPasswordError('')
        // setConPasswordError('')
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
        
            <>

                <Text h1>Register</Text>
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
                    title="Register"
                />

                <Button
                    title="I'm a member"
                    onPress={() => navigation.push('Login')}
                />

            </>

       
    )
}

export default RegisterationScreen;
