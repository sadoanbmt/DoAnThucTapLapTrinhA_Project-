import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree9, Filigree5_Bottom } from './Decorations/Filigree';
import { } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ScreenTitle title={"TÀI KHOẢN"} icon={"person"} />

                <View style={{ width: '100%', height: 400 }}>
                    <Filigree9 />
                </View>

                <View style={styles.ornateTextbox_white}>
                    <View>

                        {/* làm việc trong đây*/}

                    </View>
                    <Filigree5_Bottom />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.3)', 'transparent']}
                        style={[globalStyles.shadow, globalStyles.topShadow]}
                    />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.black,
    },

    ornateTextbox_white: {
        width: '100%',
        height: 100,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.white,
    },
});

export default AccountScreen;