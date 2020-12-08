import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { View, TextInput, Button, Text } from 'react-native'
import { Input, ThemeProvider } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUID, GetUser, UserId } from '../../TOKEN';
import firebase from '../../firestore';

const Chat = ({ route, navigation }) => {

    // var user = null
    const { uid_of_card, FoodItems, Time } = route.params;
    const [messages, setMessages] = useState([]);
    const [bho, setUser] = useState(null);
    const chatsRef = firebase.firestore().collection('chats');


    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])



    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    const readUser = async () => {
        // const _id = Math.random().toString(36).substring(7)
        // UID = await GetUID();
        // name = await GetUser();
        // const temp = { _id, UID }

        // setUser(user);
        // // console.log("UID of card", JSON.stringify(uid_of_card));
        // console.log(uid_of_card == UID ? "User are same 😂😂😂" : "User are not same");

        const _id = await GetUID();
        const name = await GetUser();
        setUser({ _id, name })
        // if (user) {
        //     setUser(JSON.parse(user));
        // }
        console.log("nig" , user);
    }

    async function handleSend(messages) {

        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                <GiftedChat messages={messages} user={bho} onSend={handleSend} />
            </ThemeProvider>
        </View>
    )
}
export default Chat;