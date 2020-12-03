import AsyncStorage from '@react-native-community/async-storage';


export const CreatUserToken = async (value) => {
    try {
        await AsyncStorage.setItem('key', value)
    } catch (e) {
        console.log(e);
    }
}

export const UserId = async (value) => {
    try {
        await AsyncStorage.setItem('uid', value)
    } catch (error) {
        console.log(error);
    }
}


export const GetUser = async () => {
    let USERVALUE = ""
    var USER_TOKEN = []
    try {
        const value = await AsyncStorage.getItem('key');
        if (value !== null || undefined) {
            // We have data!!
            console.log("fron the getuser ", value);
            USERVALUE = value;
            USER_TOKEN = USERVALUE.split("@")
        }
    } catch (error) {
        // Error retrieving data
        value = "NONE"
        console.log(error)
    }

    return (USER_TOKEN[0]);
}


export const GetUID = async () => {
    var res = "";
    try {
        const value = await AsyncStorage.getItem('uid');
        if (value !== null || undefined) {
            console.log("UID of User: ", value);
            res = value;
        }
    } catch (error) {
        value = "NONE"
        console.log(error);
    }
    return (res);
}




export const RemoveUser = async () => {
    try {
        await AsyncStorage.removeItem('key')
        await AsyncStorage.removeItem('uid')
    } catch (e) {
        // remove error
    }

    console.log('Logout!!')
}
