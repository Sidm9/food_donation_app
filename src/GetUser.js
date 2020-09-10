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
        }
    } catch (error) {
        // Error retrieving data
        value = "NONE"
        USERVALUE = value;
        USER_TOKEN = USERVALUE.split("@")
    }

    return (USERVALUE[0]);
}

export default GetUser