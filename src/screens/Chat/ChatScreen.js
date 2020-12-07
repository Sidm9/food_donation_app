import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { View, TextInput, Button, Text } from 'react-native'
import { Input, ThemeProvider } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUID, UserId } from '../../TOKEN';
import firebase from '../../firestore';

const Chat = ({ route, navigation }) => {

    const { uid_of_card, FoodItems, Time } = route.params;
    const [messages, setMessages] = useState([]);
    const [UserID, setUserID] = useState();
    const [a, b] = useState();


    const GetCurrentUserId = async () => {
        const res = await GetUID();
        setUserID(res);
        // console.log("UID of card", JSON.stringify(uid_of_card));
        console.log(uid_of_card == UserID ? "User are same 😂😂😂" : "User are not same");
    }


    const messageHandle = (value) => {
        b(value);
        // console.log(a);
    }


    const getmsgs = async () => {
        await GetCurrentUserId();
        let tempChat = [];
        console.log("userID: ", UserID)

        firebase.firestore().collection('chats')
            .doc(UserID).collection('messages').orderBy('timestamp', "desc").onSnapshot(message => {
                tempChat = [];
                // console.log(message.docs.length, " lenght")
                message.docs.forEach(msg => {
                    tempChat.push(msg.data())
                })
                const rev = tempChat.reverse()
                setMessages(rev);
            })
    }



    useEffect(() => {
        //   console.log("messages: ", messages)
    }, [messages])

    const send = async () => {
        console.log("USEr: ", UserID);
        console.log("user_Card: ", uid_of_card)
        await firebase.firestore().collection('chats').doc(UserID).collection('messages')
            .doc().set({
                text: a,
                uid: UserID,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

        // console.log("remote user: ", uid_of_card)

        await firebase.firestore().collection('chats').doc(uid_of_card).collection('messages')
            .doc().set({
                text: a,
                uid: uid_of_card,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
    }
    useEffect(() => {



        getmsgs()
    }, [UserID])


    const currentMessage = (e) => {
        console.log(e)
    }

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                {/* {ChatLayout} */}
                {messages.map(msg => msg.uid == UserID ? <View style={{ position: 'relative', borderRadius: 30, padding: 4, margin: 5, backgroundColor: 'blue', display: 'flex', justifyContent: 'flex-end' }}>

                    <Text style={{ color: 'white', padding: 5 }}>{msg.text}</Text>

                </View> : <View style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'flex-start' }}>
                        <Text style={{ color: 'white', padding: 5 }}>{msg.text}</Text>

                    </View>)}

                {/* <Input onChange={(val) => messageHandle(val)} /> */}


                <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between', position: "absolute", bottom: 0, left: 0 }}>

                    <TextInput
                        placeholderTextColor="white"
                        style={{ height: 40, width: 100, color : 'white', padding: 10, borderColor: 'gray', borderWidth: 1, flex: 8 }}
                        onChangeText={text => messageHandle(text)}
                    />

                    <Button style={{
                        flex: 2,
                    }} title="SEND" onPress={send} />
                </View>
            </ThemeProvider>
        </View>
    )
}
export default Chat;