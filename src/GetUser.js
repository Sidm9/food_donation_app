import AsyncStorage from '@react-native-community/async-storage';

export const GetUser = async () => {
    let USERVALUE = ""
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
    }

    return USERVALUE;
}