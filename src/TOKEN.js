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
  
    try {
        const value = await AsyncStorage.getItem('key');
        if (value !== null || undefined) {
            const USERVALUE = value
           
            // We have data!!
            console.log("TOKE || from the getuser ", value);
            const name = USERVALUE.split("@")[0]
            console.log("NAME");
            return (name);
        }
    } catch (error) {
        // Error retrieving data
        value = "NONE"
        console.log(error)
    }
   
}


export const GetUID = async () => {
    var res = "";
    try {
        const value = await AsyncStorage.getItem('uid');
        if (value !== null || undefined) {
            console.log(" TOKEN || UID of User: ", value);
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
