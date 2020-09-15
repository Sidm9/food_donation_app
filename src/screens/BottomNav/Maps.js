import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps';
import { Text } from 'react-native-elements'
const Maps = () => {
    return (
        <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    )
}

export default Maps
