import AsyncStorage from '@react-native-community/async-storage';

const GetUser = async () => {
    let USERVALUE = ""
    var USER_TOKEN = []
    try {
        const value = await AsyncStorage.getItem('key');    
        if (value !== null || undefined) {
            // We have data!!
            console.log("fron the getuser " ,value);
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

export default GetUser