import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree9, Filigree5_Bottom } from './Decorations/Filigree';
import { SidedButton_Left, SidedButton_Right, OrnateButton, DecoButton } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ScreenTitle title={"TÀI KHOẢN"} icon={"person"} />

                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <SidedButton_Left ButtonText={"Hello world"} Active={true} />
                    <SidedButton_Right ButtonText={"Hello world"} Active={false} />
                </View>
                <View style={styles.ornateTextbox_white}>
                    <View>

                        {/* làm việc trong đây*/}

                    </View>
                    <LinearGradient colors={['rgba(0,0,0,0.2)', 'transparent']}
                        style={[globalStyles.shadow, globalStyles.topShadow]}
                    />
                </View>

                <View style={styles.ornateTextbox}>
                    <View>

                        {/* làm việc trong đây*/}

                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[globalStyles.shadow, globalStyles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[globalStyles.shadow, globalStyles.rightShadow]}
                    />
                    <Filigree5_Bottom customColor={colors.lightgray} />
                </View>

                <TouchableOpacity>
                    <OrnateButton ButtonText={"Hello world"} ButtonIcon={""} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <DecoButton ButtonText={"Hello world"} ButtonIcon={""} />
                </TouchableOpacity>

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

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.white,
    },

    ornateTextbox: {
        width: '100%',
        height: 250,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },

});

export default LoginScreen;