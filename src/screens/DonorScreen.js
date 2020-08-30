import React from 'react'
import { Card, Text, Divider } from 'react-native-elements'
import { View, StyleSheet, ScrollView } from 'react-native'

const DonorScreen = () => {
    return (
        <>
            <View style={{ flex: 1, alignItems: "center", flexDirection: 'column', marginLeft: '2%', marginRight: '2%' }}>

                <Text h3 style={{ marginLeft: '2%', marginRight: '2%' }}>Select Your Food Preference</Text>
                <ScrollView>
                    <Divider style={{ backgroundColor: 'blue', marginTop: 10, marginLeft: '2%', marginRight: '2%', marginBottom: 10, padding: 1 }} />
                    <View style={styles.inner_container}>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>
                        <Card containerStyle={styles.rect}></Card>

                    </View>
                </ScrollView>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    inner_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    rect: {
        width: '45%',
        margin: '2%',
        height: 120,
        padding: 0,
        height: 120,
        backgroundColor: "white"
    },
});

export default DonorScreen
