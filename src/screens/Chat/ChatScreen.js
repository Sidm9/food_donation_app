import React, { useState, useEffect , useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { View } from 'react-native'
import ChatConfig from '../Chat/ChatConfig';
import { ThemeProvider } from 'react-native-elements'
import theme from '../GlobalStyles';
import { GetUID, UserId } from '../../TOKEN';


const Chat = ({ route, navigation }) => {

    const { uid_of_card } = route.params;
    const [messages, setMessages] = useState([]);
    const [UserID, setUserID] = useState();
    

    const GetCurrentUserId = async () => {
        const res = await GetUID();
        setUserID(res);
        console.log("UID of card", JSON.stringify(uid_of_card));
        console.log(uid_of_card == UserID ? "User are same 😂😂😂" : "User are not same");
    }



    useEffect(() => {

        GetCurrentUserId();

        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                },
            },
        ])
    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const ChatLayout =
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />

    return (
        <View style={theme.appearanceContainer}>
            <ThemeProvider theme={theme}>
                {ChatLayout}
            </ThemeProvider>
        </View>
    )
}
export default Chat;