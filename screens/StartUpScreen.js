import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StartUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>StartUpScreen</Text>

            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <Text>MainScreen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default StartUpScreen;