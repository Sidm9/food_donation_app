import AsyncStorage from '@react-native-community/async-storage';


export const CreatUserToken = async (value) => {
    try {
        await AsyncStorage.setItem('key', value)
    } catch (e) {
        console.log(e);
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




export const RemoveUser = async () => {
    try {
        await AsyncStorage.removeItem('key')
    } catch (e) {
        // remove error
    }

    console.log('Logout!!')
}
