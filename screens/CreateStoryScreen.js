import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree2, Filigree4, Filigree5_Bottom, Filigree5_Top, Filigree8_BottomLeft, Filigree8_BottomRight, Filigree8_TopLeft, Filigree8_TopRight, Filigree9 } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';

const CreateStoryScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ScreenTitle title={"ĐĂNG TRUYỆN"} icon={"edit-note"} />

                <TouchableOpacity>
                    <OrnateButton ButtonText={"Sáng Tác Truyện"} ButtonIcon={"edit-note"} />
                </TouchableOpacity>

                {/* <TouchableOpacity style={{zIndex: 2}}>
                    <OrnateOption ButtonText={"Đây Là Sáng Tác Của Bạn"} ButtonIcon={null} Active={true} />
                </TouchableOpacity>
                
                <TouchableOpacity  style={{zIndex: 1}}>
                    <OrnateOption ButtonText={"Đây Là Sáng Tác Của Bạn"} ButtonIcon={null} Active={false} />
                </TouchableOpacity>

                <View style={styles.pictureFrame}>
                    <View>

                    </View>
                    <Filigree8_TopLeft />
                    <Filigree8_TopRight />
                    <Filigree8_BottomLeft />
                    <Filigree8_BottomRight />
                </View>

                <View style={styles.ornateTextbox}>
                    <View>

                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[styles.shadow, styles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[styles.shadow, styles.rightShadow]}
                    />
                    <Filigree5_Top customColor={colors.lightgray} />
                    <Filigree5_Bottom customColor={colors.lightgray} />
                </View>

                <View style={styles.ornateTextbox_2}>
                    <View>

                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[styles.shadow, styles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[styles.shadow, styles.rightShadow]}
                    />
                    <Filigree4 customBottomPosition={0} customOpacity={0.12} />
                </View>

                <View style={styles.ornateTextbox_white}>
                    <View>

                    </View>
                    <Filigree5_Bottom />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.3)', 'transparent']}
                        style={[styles.shadow, styles.topShadow]}
                    />
                </View> */}

                <View style={{ height: 90 }}>
                    <Filigree2 customPosition={0} />
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

    pictureFrame: {
        width: 200,
        height: 300,
        margin: 20,

        borderColor: colors.lightgray,
        borderWidth: 1
    },

    ornateTextbox: {
        width: '100%',
        height: 450,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },

    ornateTextbox_2: {
        width: '100%',
        height: 180,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
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
    shadow: {
        position: 'absolute',
    },
    topShadow: {
        height: "70%",
        width: '100%',
        top: 0,
        left: 0,
    },
    bottomShadow: {
        height: "50%",
        width: '100%',
        bottom: 0,
        left: 0,
    },
    leftShadow: {
        height: '100%',
        width: '10%',
        bottom: 0,
        left: 0,
    },
    rightShadow: {
        height: '100%',
        width: '10%',
        bottom: 0,
        right: 0,
    },
});

export default CreateStoryScreen;