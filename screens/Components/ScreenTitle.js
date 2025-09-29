import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch } from 'react-redux';

import { colors } from '../GlobalStyle';
import { Filigree3 } from '../Decorations/Filigree';
import { searchForBooks, viewBookType } from '../../slices/bookSlice';

const ScreenTitle = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>

                <View style={styles.bottomBorderContainer}>
                    <View style={styles.bottomBorder} />
                    <View style={styles.iconContainer}>
                        <MaterialIcons size={26} color={colors.gold} name={icon} />
                    </View>
                    <View style={styles.bottomBorder} />
                </View>
                <Filigree3 />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    //-------------------------------------------------------//

    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 40,

        borderTopWidth: 3,
        borderColor: colors.gold,
        backgroundColor: colors.black,
    },

    titleText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 3,

    },

    bottomBorderContainer: {
        zIndex: 999,
        position: 'absolute',
        bottom: -13,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '100%',
    },

    iconContainer: {
        transform: [{ translateY: 5 }]
    },

    bottomBorder: {
        width: '45%',
        height: 1,

        backgroundColor: colors.gold
    }

    //-------------------------------------------------------//
});

export default ScreenTitle;