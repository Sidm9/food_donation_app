import React, { useState } from 'react'
import { Input, Text, Button, Card } from 'react-native-elements';
import firebase from '../../firestore.js';

const LoginScreen = ({ navigation }) => {

    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailHandler = (value) => {
        setemailAddress(value);
        console.log(emailAddress);
    }

    const passwordHandler = (value) => {
        setPassword(value);
        console.log(password);
    }


    const handleSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
            console.log("You are in !!");
            navigation.navigate('Home');
        })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log("This is the error : ", errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
                if (errorCode === "auth/invalid-email") {
                    setemailError(errorMessage);
                }
                else { setemailError('') }

                if (errorCode === "auth/wrong-password") {
                    setPasswordError(errorMessage);
                }
                else { setPasswordError('') }
                
            })
    }
    return (
        <>
            <Card>

                <Text h1 padding>Login</Text>
                <Input
                    
                    placeholder=' Email Adress'
                    onChangeText={(val) => { emailHandler(val) }}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    errorMessage={emailError}
                />

                <Input
                    placeholder=' Password'
                    secureTextEntry={true}
                    onChangeText={(val) => { passwordHandler(val) }}
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    errorMessage={passwordError}
                />

                <Button
                    title="Login"
                    onPress={handleSubmit}
                />


                <Button
                    title="I'm new here"
                    onPress={() => navigation.navigate('Registeration')}
                />

                <Button
                    title="Bypass"
                    onPress={() => navigation.navigate('Home')}
                />
            </Card>
            {/* <Text style = {{fontFamily : "ProductSans"}}>fjowei</Text> */}

        </>
    )
}

export default LoginScreen;
