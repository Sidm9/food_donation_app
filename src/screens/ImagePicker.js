// import React, { useState, useEffect } from 'react'
// import { Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// import themes from './GlobalStyles';
// import { ThemeProvider, Button } from 'react-native-elements';
// const ImagePick = () => {
//     const [image, setImage] = useState(null);
//     useEffect(() => {
//         getPermissionAsync();
//     }, [image])
//     const getPermissionAsync = async () => {
//         if (Platform.OS !== 'web') {
//             const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//             if (status !== 'granted') {
//                 alert('Sorry, we need camera roll permissions to make this work!');
//             }
//         }
//     };
//     const _pickImage = async () => {
//         try {
//             let result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.All,
//                 allowsEditing: true,
//                 aspect: [4, 3],
//                 quality: 1,
//             });
//             if (!result.cancelled) {
//                 setImage({ image: result.uri });
//             }
//             console.log(result);
//         } catch (E) {
//             console.log(E);
//         }
//     };
//     return (
//         <ThemeProvider theme={themes}>
//             <View>
//                 <Button title="Pick an image from camera roll" onPress={_pickImage} />
//                 {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//             </View>
//         </ThemeProvider>
//     );
// }
// export default ImagePick;

import * as React from 'react';
import { Image, View, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import theme from './GlobalStyles';
import { ThemeProvider, Button, Icon, Text } from 'react-native-elements';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <ScrollView>
        <ThemeProvider theme={theme}>
          <View style={[theme.mainContainer.center]}>
            <Button title="Pick an image from camera roll" onPress={this._pickImage} />
            {/* {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, marginTop: '6%' }} />} */}
            {
              image === null ?
                <Icon
                  name='picture-o'
                  type='font-awesome'
                /> :
                <Image
                  source={{ uri: image }}
                  style={{ width: '100%', height: 200, marginTop: '6%', marginTop: 30 }} />
            }
          </View>
        </ThemeProvider>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
        this.props.callback(this.state.image);
      }
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}